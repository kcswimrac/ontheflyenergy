import React, { useState } from 'react';

type ConfigType = '480V Wye' | '208V Wye' | '240V Split Phase' | '240V Delta' | 'High Leg Delta' | 'Corner Grounded Delta';

interface VoltageConfig {
  name: ConfigType;
  nodes: {
    id: string;
    label: string;
    x: number;
    y: number;
    isGround?: boolean;
    isWildLeg?: boolean;
  }[];
  voltages: Record<string, Record<string, number | null>>;
  description: string;
}

const configs: VoltageConfig[] = [
  {
    name: '480V Wye',
    nodes: [
      { id: 'L1', label: 'L1', x: 150, y: 80 },
      { id: 'L2', label: 'L2', x: 50, y: 200 },
      { id: 'L3', label: 'L3', x: 250, y: 200 },
      { id: 'N', label: 'N', x: 150, y: 170, isGround: true },
    ],
    voltages: {
      'L1-L2': { value: 480 },
      'L2-L3': { value: 480 },
      'L3-L1': { value: 480 },
      'L1-N': { value: 277 },
      'L2-N': { value: 277 },
      'L3-N': { value: 277 },
    },
    description: '480V line to line, 277V line to neutral. Industrial standard for large motors and lighting.',
  },
  {
    name: '208V Wye',
    nodes: [
      { id: 'L1', label: 'L1', x: 150, y: 80 },
      { id: 'L2', label: 'L2', x: 50, y: 200 },
      { id: 'L3', label: 'L3', x: 250, y: 200 },
      { id: 'N', label: 'N', x: 150, y: 170, isGround: true },
    ],
    voltages: {
      'L1-L2': { value: 208 },
      'L2-L3': { value: 208 },
      'L3-L1': { value: 208 },
      'L1-N': { value: 120 },
      'L2-N': { value: 120 },
      'L3-N': { value: 120 },
    },
    description: '208V three phase with 120V line to neutral. Most common commercial building configuration.',
  },
  {
    name: '240V Split Phase',
    nodes: [
      { id: 'L1', label: 'L1', x: 70, y: 125 },
      { id: 'L2', label: 'L2', x: 230, y: 125 },
      { id: 'N', label: 'N', x: 150, y: 125, isGround: true },
    ],
    voltages: {
      'L1-L2': { value: 240 },
      'L1-N': { value: 120 },
      'L2-N': { value: 120 },
    },
    description: 'Residential single phase with center tap. 120V for outlets, 240V for appliances.',
  },
  {
    name: '240V Delta',
    nodes: [
      { id: 'L1', label: 'L1', x: 150, y: 80 },
      { id: 'L2', label: 'L2', x: 70, y: 200 },
      { id: 'L3', label: 'L3', x: 230, y: 200 },
    ],
    voltages: {
      'L1-L2': { value: 240 },
      'L2-L3': { value: 240 },
      'L3-L1': { value: 240 },
    },
    description: 'Pure three phase delta. No neutral. 240V line to line only.',
  },
  {
    name: 'High Leg Delta',
    nodes: [
      { id: 'L1', label: 'L1', x: 70, y: 200 },
      { id: 'L2', label: 'L2', x: 230, y: 200 },
      { id: 'L3', label: 'L3 (High)', x: 150, y: 80, isWildLeg: true },
      { id: 'N', label: 'N', x: 150, y: 200, isGround: true },
    ],
    voltages: {
      'L1-L2': { value: 240 },
      'L2-L3': { value: 240 },
      'L3-L1': { value: 240 },
      'L1-N': { value: 120 },
      'L2-N': { value: 120 },
      'L3-N': { value: 208 },
    },
    description: 'Delta with center tap. L3 is the high leg at 208V to neutral. Never use for 120V loads.',
  },
  {
    name: 'Corner Grounded Delta',
    nodes: [
      { id: 'L1', label: 'L1 (Ground)', x: 150, y: 80, isGround: true },
      { id: 'L2', label: 'L2', x: 70, y: 200 },
      { id: 'L3', label: 'L3', x: 230, y: 200 },
    ],
    voltages: {
      'L1-L2': { value: 240 },
      'L2-L3': { value: 240 },
      'L3-L1': { value: 240 },
    },
    description: 'Delta with one corner grounded. L1 is at ground potential.',
  },
];

const VoltageConfigDiagram: React.FC = () => {
  const [selectedConfig, setSelectedConfig] = useState<ConfigType>('480V Wye');
  const [hoveredNodes, setHoveredNodes] = useState<string[]>([]);

  const config = configs.find(c => c.name === selectedConfig)!;

  const getVoltage = (node1: string, node2: string): number | null => {
    if (node1 === node2) return 0;
    const key1 = `${node1}-${node2}`;
    const key2 = `${node2}-${node1}`;
    return config.voltages[key1]?.value ?? config.voltages[key2]?.value ?? null;
  };

  const handleNodeClick = (nodeId: string) => {
    if (hoveredNodes.includes(nodeId)) {
      setHoveredNodes(hoveredNodes.filter(id => id !== nodeId));
    } else if (hoveredNodes.length < 2) {
      setHoveredNodes([...hoveredNodes, nodeId]);
    } else {
      setHoveredNodes([nodeId]);
    }
  };

  const voltage = hoveredNodes.length === 2 ? getVoltage(hoveredNodes[0], hoveredNodes[1]) : null;

  return (
    <div className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-8">
      {/* Configuration Selector */}
      <div className="mb-8">
        <h3 className="font-montserrat font-semibold text-xl text-industrial-white mb-4">
          Select Configuration:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {configs.map(cfg => (
            <button
              key={cfg.name}
              onClick={() => {
                setSelectedConfig(cfg.name);
                setHoveredNodes([]);
              }}
              className={`px-4 py-2 rounded-lg font-montserrat text-sm transition-all duration-300 ${
                selectedConfig === cfg.name
                  ? 'bg-energy-green text-midnight-black'
                  : 'bg-midnight-black text-gray-100 hover:bg-steel-blue/50 border border-energy-green/20'
              }`}
            >
              {cfg.name}
            </button>
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-6 p-4 bg-midnight-black/50 rounded-lg border border-energy-green/10">
        <p className="font-open-sans text-gray-100 leading-relaxed">{config.description}</p>
      </div>

      {/* Instruction */}
      <div className="mb-6 text-center">
        <p className="font-open-sans text-sm text-gray-400">
          Click two nodes to see the voltage between them
        </p>
      </div>

      {/* SVG Diagram */}
      <div className="bg-midnight-black rounded-lg p-8 mb-6 flex justify-center">
        <svg width="300" height="250" viewBox="0 0 300 250">
          {/* Draw connections */}
          {config.nodes.map((node1, i) =>
            config.nodes.slice(i + 1).map(node2 => {
              const isConnected = getVoltage(node1.id, node2.id) !== null;
              if (!isConnected) return null;

              const isHighlighted =
                hoveredNodes.includes(node1.id) && hoveredNodes.includes(node2.id);

              return (
                <line
                  key={`${node1.id}-${node2.id}`}
                  x1={node1.x}
                  y1={node1.y}
                  x2={node2.x}
                  y2={node2.y}
                  stroke={isHighlighted ? '#27AE60' : '#2C3E50'}
                  strokeWidth={isHighlighted ? 3 : 2}
                  strokeDasharray={node1.id === 'N' || node2.id === 'N' ? '5,5' : undefined}
                />
              );
            })
          )}

          {/* Draw nodes */}
          {config.nodes.map(node => {
            const isSelected = hoveredNodes.includes(node.id);
            return (
              <g key={node.id}>
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="20"
                  fill={
                    isSelected
                      ? '#27AE60'
                      : node.isGround
                      ? '#2C3E50'
                      : node.isWildLeg
                      ? '#FF6B6B'
                      : '#0D0D0D'
                  }
                  stroke={node.isWildLeg ? '#FF6B6B' : '#27AE60'}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-200"
                  onClick={() => handleNodeClick(node.id)}
                />
                <text
                  x={node.x}
                  y={node.y + 5}
                  textAnchor="middle"
                  fill="#F5F5F5"
                  fontSize="14"
                  fontWeight="bold"
                  className="cursor-pointer pointer-events-none"
                >
                  {node.id}
                </text>
                {node.isGround && (
                  <text
                    x={node.x}
                    y={node.y + 35}
                    textAnchor="middle"
                    fill="#27AE60"
                    fontSize="10"
                  >
                    ⏚
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Voltage Display */}
      {hoveredNodes.length === 2 && (
        <div className="text-center p-6 bg-energy-green/10 border border-energy-green/30 rounded-lg">
          <p className="font-montserrat text-sm text-gray-400 mb-2">
            Voltage between {hoveredNodes[0]} and {hoveredNodes[1]}:
          </p>
          {voltage !== null ? (
            <p className="font-montserrat font-bold text-4xl text-energy-green">{voltage} V</p>
          ) : (
            <p className="font-open-sans text-lg text-gray-400 italic">Not connected</p>
          )}
        </div>
      )}

      {/* Legend */}
      <div className="mt-6 p-4 bg-midnight-black/50 rounded-lg border border-energy-green/10">
        <p className="font-montserrat font-semibold text-sm text-industrial-white mb-3">
          Legend:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm font-open-sans text-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-energy-green border-2 border-energy-green"></div>
            <span>Selected Node</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-steel-blue border-2 border-energy-green"></div>
            <span>Grounded Node</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-red-500 border-2 border-red-500"></div>
            <span>High Leg (Wild Leg)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoltageConfigDiagram;
