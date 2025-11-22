---
title: "Where Line Voltage Actually Comes From"
date: "2025-10-07"
summary: "Why common voltages like 480 V, 208 V, 240 V, 120 V, and 277 V exist, and how transformer geometry determines every point-to-point voltage in a system."
tags: ["power systems", "three-phase", "distribution", "transformers"]
thumbnail: "/images/insights/line-voltage.jpg"
slug: "where-line-voltage-comes-from"
---

Most people treat voltages like 480, 240, 208, 120, and 277 volts as facts of nature. They are not. Every one of these voltages is the direct result of transformer geometry, coil orientation, grounding method, and how phases relate electrically to one another.

Understanding where these voltages come from is the foundation for understanding power quality, imbalance, harmonics, load behavior, and grid stability.

This guide breaks down the major North American distribution configurations and explains how to calculate every line to line and line to neutral voltage simply by looking at how the transformer is wired.

## Three Phase vs Single Phase: The Foundation

Every voltage in a building traces back to a transformer that is either:

- **Three phase**, using a Delta or Wye secondary
- **Single phase**, using a center tap (split phase)
- **A hybrid** of the above, such as open delta or wild leg

These configurations define the electrical geometry you have to work with.

Three phase voltages follow this rule:

```
Line to line voltage = Line to neutral voltage × √3
Line to neutral voltage = Line to line voltage ÷ √3
```

This is why 480 V three phase creates 277 V phase to neutral, and why 208 V three phase creates 120 V phase to neutral. Nothing mystical. It is geometry.

## 480 V Wye: Why 480 Gives You 277

In a 480 V Wye system, each coil is wound so that:

- The voltage from any phase to neutral is **277 V**
- The voltage from any phase to any other phase is **480 V**

Because:

```
480 V ÷ √3 = 277 V
277 V × √3 = 480 V
```

This system is used in industrial settings because motors run more efficiently at higher voltage and current is lower for the same power.

**Point to point map:**

- L1 to L2 = 480 V
- L2 to L3 = 480 V
- L3 to L1 = 480 V
- Any L to N = 277 V

This is the geometry that drives fluorescent ballasts, commercial lighting, and large machinery.

## 208 V Wye: Why 208 Gives You 120

208 V three phase comes from the same Wye geometry but with lower coil voltage.

```
208 V ÷ √3 = 120 V
```

**Point to point map:**

- L1 to L2 = 208 V
- L2 to L3 = 208 V
- L3 to L1 = 208 V
- Any L to N = 120 V

This is the most common system in commercial buildings because it gives you both:

- **120 V** for receptacles and small loads
- **208 V** for three phase motors, HVAC, and kitchen equipment

## 240 V Split Phase: The Residential Workhorse

Residential distribution in North America typically uses single phase with a center tap.

The transformer secondary has:

- One coil
- A center tap that becomes the neutral
- Two ends that become L1 and L2

Because of symmetry:

- L1 to Neutral = 120 V
- L2 to Neutral = 120 V
- L1 to L2 = 240 V

There is no phase rotation here. Split phase is a single phase system with a center tap, not two phases.

## 240 V Delta: No Neutral Unless You Add One

A classic 240 V delta has three coils arranged in a triangle. Each corner is one hot leg.

**Point to point:**

- L1 to L2 = 240 V
- L2 to L3 = 240 V
- L3 to L1 = 240 V

There is no neutral and therefore no line to neutral voltage. You get pure three phase only.

This appears in older machine shops and small industrial buildings.

## High Leg Delta (Wild Leg Delta): The Strange Hybrid

This is one of the most misunderstood systems in North America.

A high leg delta is a 240 V delta with a center tap added to one of the transformer coils. This creates a neutral. But because the geometry is uneven, one of the phases becomes the "high leg".

**Voltages:**

- L1 to N = 120 V
- L2 to N = 120 V
- L3 to N = 208 V (the wild leg)
- L1 to L2 = 240 V
- L2 to L3 = 240 V
- L3 to L1 = 240 V

**Purpose:**

- You get 120 V for lighting and outlets
- You get 240 V three phase for motors
- You avoid replacing legacy delta infrastructure

**The high leg must never feed 120 V loads.**

## Corner Grounded Delta: The Simplest Possible Grounding Method

A delta system can ground any one of its corners. This creates a grounded phase conductor.

In a corner grounded delta:

- L1 might be grounded (0 V to ground)
- L2 to ground = 240 V
- L3 to ground = 240 V
- Phase to phase remains 240 V

This simplifies overcurrent protection because one leg behaves like a neutral in terms of reference potential.

These systems appear in older industrial sites where minimizing conductor count mattered.

## Understanding How Voltages Appear on the Pole

Every distribution pole in North America has:

- A medium voltage primary (typically 7 kV to 34 kV)
- One or more distribution transformers
- Secondaries wired in a configuration chosen for the load below

The secondary wiring determines everything downstream.

- If the secondary is **Wye**, you get line to neutral and line to line relationships.
- If the secondary is **Delta**, you get line to line only unless a tap is added.
- If it is **center tapped**, you get split phase.

The pole does not "output" 480 or 208 or 240. The transformer geometry creates those numbers.

## Interactive Visual Content

The interactive diagram below allows you to explore how different transformer configurations create different voltages. Hover over any two points to see the voltage between them, and toggle between configurations to understand how geometry determines every voltage in the system.
