import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, Save, FileText, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { SITE_CONTENT_SECTIONS, loadSiteContent, prepareSiteContentForSave } from '../utils/siteContentManager';

const ContentManagerPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [content, setContent] = useState<any>(null);
  const [jsonText, setJsonText] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (selectedSection) {
      loadContent(selectedSection);
    }
  }, [selectedSection]);

  const loadContent = async (sectionId: string) => {
    try {
      const data = await loadSiteContent(sectionId);
      setContent(data);
      setJsonText(JSON.stringify(data, null, 2));
      setSaveMessage('');
    } catch (error) {
      console.error('Error loading content:', error);
      setSaveMessage('Error loading content');
    }
  };

  const handleSave = () => {
    try {
      // Validate JSON
      const parsedContent = JSON.parse(jsonText);
      setContent(parsedContent);

      // Prepare for download
      if (selectedSection) {
        const { filename, content: contentStr } = prepareSiteContentForSave(selectedSection, parsedContent);

        // Create download link
        const blob = new Blob([contentStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        setSaveMessage(`✓ Downloaded ${filename}. Upload this file to public/content/site/ to update the website.`);
      }
    } catch (error) {
      console.error('Save error:', error);
      setSaveMessage('Error: Invalid JSON format');
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-midnight-black text-industrial-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/insights')}
            className="flex items-center gap-2 text-gray-400 hover:text-energy-green transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </button>
          <h1 className="font-montserrat font-bold text-4xl text-industrial-white mb-2">
            Content Manager
          </h1>
          <p className="font-open-sans text-gray-400">
            Edit website content. Changes require uploading modified JSON files.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Section Selector */}
          <div className="lg:col-span-1">
            <h2 className="font-montserrat font-bold text-xl mb-4">Sections</h2>
            <div className="space-y-3">
              {SITE_CONTENT_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSection(section.id)}
                  className={`w-full text-left p-4 rounded-lg border transition-all ${
                    selectedSection === section.id
                      ? 'bg-energy-green/20 border-energy-green'
                      : 'bg-steel-blue/20 border-gray-600 hover:border-energy-green/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-energy-green flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-montserrat font-semibold text-industrial-white">
                        {section.label}
                      </div>
                      <div className="font-open-sans text-sm text-gray-400 mt-1">
                        {section.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Editor */}
          <div className="lg:col-span-2">
            {selectedSection ? (
              <>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-montserrat font-bold text-xl">
                    {SITE_CONTENT_SECTIONS.find(s => s.id === selectedSection)?.label}
                  </h2>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-2 bg-energy-green hover:bg-green-500 text-midnight-black font-montserrat font-semibold px-6 py-2 rounded-lg transition-all disabled:opacity-50"
                  >
                    <Download className="h-4 w-4" />
                    Download JSON
                  </button>
                </div>

                {saveMessage && (
                  <div className={`mb-4 p-4 rounded-lg ${
                    saveMessage.startsWith('Error')
                      ? 'bg-red-500/20 border border-red-500 text-red-400'
                      : 'bg-energy-green/20 border border-energy-green text-energy-green'
                  }`}>
                    {saveMessage}
                  </div>
                )}

                <div className="bg-steel-blue/20 border border-gray-600 rounded-lg p-6">
                  <label className="block font-montserrat font-semibold mb-3">
                    Edit JSON Content
                  </label>
                  <textarea
                    value={jsonText}
                    onChange={(e) => setJsonText(e.target.value)}
                    className="w-full bg-midnight-black border border-gray-600 rounded-lg p-4 text-industrial-white font-mono text-sm focus:border-energy-green focus:outline-none transition-colors resize-none"
                    rows={30}
                    spellCheck={false}
                  />
                  <p className="font-open-sans text-sm text-gray-400 mt-3">
                    Edit the JSON structure above. Click "Download JSON" to save your changes locally,
                    then upload the file to <code className="bg-midnight-black px-2 py-1 rounded">
                    public/content/site/</code> in your repository.
                  </p>
                </div>
              </>
            ) : (
              <div className="bg-steel-blue/20 border border-gray-600 rounded-lg p-12 text-center">
                <FileText className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                <p className="font-open-sans text-gray-400">
                  Select a section from the left to start editing
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManagerPage;
