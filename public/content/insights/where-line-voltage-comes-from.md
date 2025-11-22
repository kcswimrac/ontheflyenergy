---
title: "Where Line Voltage Actually Comes From"
date: "2025-10-07"
summary: "Why common voltages like 480 V, 208 V, 240 V, 120 V, and 277 V exist, and how transformer geometry determines every point-to-point voltage in a system."
tags: ["power systems", "three-phase", "distribution", "transformers"]
thumbnail: "/images/insights/line-voltage.jpg"
slug: "where-line-voltage-comes-from"
---

Most people treat voltages like 480, 240, 208, 120, and 277 volts as if they are facts of nature. They are not. These voltages exist because of transformer turns ratios, how the secondary is wired, and how phases relate geometrically to one another. Grounding defines the reference point but does not create the voltage itself.

Understanding where these voltages come from is the starting point for power quality, imbalance, harmonics, load behavior, and grid stability.

This guide breaks down the major North American distribution configurations and shows how every line to line and line to neutral voltage emerges from transformer wiring geometry.

Three Phase vs Single Phase: The Foundation

Every building voltage originates from a transformer that is wired as:

Three phase, using a Delta or Wye secondary

Single phase, using a center-tapped coil (split phase)

A hybrid, such as open delta or high leg delta

These configurations define the electrical geometry downstream.

In a balanced Wye system the relationships are:

Line to line voltage = Line to neutral voltage × √3
Line to neutral voltage = Line to line voltage ÷ √3


This is why 480 V Wye produces 277 V to neutral and why 208 V Wye produces 120 V to neutral. It is geometry, not magic.

These rules apply only to balanced Wye. Delta systems do not have a natural neutral unless one is created.

480 V Wye: Why 480 Gives You 277

A 480 V Wye secondary is built from three identical coils connected at a common neutral point. Each coil is wound to produce 277 V. Because the phases are separated by 120 electrical degrees, the phase to phase voltage becomes 277 × √3 = 480 V.

Point to point map:

L1 to L2 = 480 V

L2 to L3 = 480 V

L3 to L1 = 480 V

Any L to N = 277 V

This configuration dominates industrial settings because higher voltage reduces current for the same power, which improves motor efficiency and cuts conductor size.

208 V Wye: Why 208 Gives You 120

208 V three phase is the same geometry as 480 V Wye, just with coils wound for 120 V.

208 V ÷ √3 = 120 V


Point to point map:

L1 to L2 = 208 V

L2 to L3 = 208 V

L3 to L1 = 208 V

Any L to N = 120 V

It is the most common commercial system because it delivers both:

120 V for receptacles and lighting

208 V for three phase motors, HVAC, and kitchen equipment

240 V Split Phase: The Residential Workhorse

Most North American homes receive single phase power from a center-tapped transformer secondary.

The transformer has:

One coil wound for 240 V

A center tap connected to neutral

Coil ends connected as L1 and L2

This creates:

L1 to Neutral = 120 V

L2 to Neutral = 120 V

L1 to L2 = 240 V

This is one phase, not two. The two 120 V legs are opposite ends of the same winding.

240 V Delta: No Neutral Unless You Add One

A classic 240 V delta uses three 240 V coils connected in a triangle. Each corner becomes one hot leg.

Point to point:

L1 to L2 = 240 V

L2 to L3 = 240 V

L3 to L1 = 240 V

There is no neutral and no line to neutral voltage. This is pure three phase and shows up in older light industrial facilities.

High Leg Delta (Wild Leg Delta): The Strange Hybrid

A high leg delta is a 240 V delta where one coil is center tapped to create a neutral. Because only one coil has a midpoint, the phase-to-neutral voltages become asymmetrical.

Voltages:

L1 to N = 120 V

L2 to N = 120 V

L3 to N = 208 V (the “high leg”)

L1 to L2 = 240 V

L2 to L3 = 240 V

L3 to L1 = 240 V

Purpose:

Provides 120 V for lighting and receptacles

Provides 240 V three phase for motors

Allows legacy delta systems to support mixed loads

The high leg must never serve 120 V loads.

Corner Grounded Delta: The Simplest Grounding Method

A delta system can ground one of its corners. This does not change any phase to phase voltages. It simply establishes a stable ground reference.

In a corner grounded 240 V delta:

One phase is 0 V to ground

The other two phases are 240 V to ground

Phase to phase remains 240 V

These systems persist in older industrial sites where minimizing conductor count mattered.

Understanding How Voltages Appear on the Pole

Every distribution pole carries:

A medium-voltage primary (typically 7 kV to 34 kV)

One or more distribution transformers

Secondary wiring chosen based on site load requirements

The secondary configuration sets everything:

Wye gives line to neutral and line to line voltages

Delta gives line to line only unless a neutral tap is added

Center tap produces split phase

The pole does not inherently “produce” 480, 208, or 240. The transformer turns ratio and wiring geometry create those voltages.

Interactive Visual Content

The interactive diagram below lets you explore how different transformer configurations generate their respective voltages. Hover over any two points to see the voltage between them and toggle configurations to watch how geometry shapes the entire system.