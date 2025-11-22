---
title: "Where Line Voltage Actually Comes From"
date: "2025-10-07"
summary: "Why common voltages like 480 V, 208 V, 240 V, 120 V, and 277 V exist, and how transformer geometry determines every point-to-point voltage in a system."
tags: ["power systems", "three-phase", "distribution", "transformers"]
thumbnail: "/images/insights/line-voltage.jpg"
slug: "where-line-voltage-comes-from"
---

# Understanding Where North American Voltages Come From

Most people treat voltages like 480, 240, 208, 120, and 277 volts as if they are facts of nature. They are not. These voltages exist because of transformer turns ratios, how the secondary is wired, and how phases relate geometrically to one another. Grounding defines the reference point but does not create the voltage itself.

Understanding where these voltages come from is the starting point for power quality, imbalance, harmonics, load behavior, and grid stability.

This guide breaks down the major North American distribution configurations and shows how every line to line and line to neutral voltage emerges from transformer wiring geometry.

## Three Phase vs Single Phase: The Foundation

Every building voltage originates from a transformer that is wired as:

- **Three phase**, using a Delta or Wye secondary  
- **Single phase**, using a center-tapped coil (split phase)  
- **A hybrid**, such as open delta or high leg delta  

In a **balanced Wye system** the voltage relationships are:

```
Line to line voltage = Line to neutral voltage × √3
Line to neutral voltage = Line to line voltage ÷ √3
```

This is why 480 V Wye produces 277 V to neutral and why 208 V Wye produces 120 V to neutral. These rules apply only to **balanced Wye** systems.

---

## 480 V Wye: Why 480 Gives You 277

A 480 V Wye secondary uses three identical coils connected at a neutral point. Each coil is wound to produce **277 V**. Because the phases are 120 electrical degrees apart, the phase to phase voltage becomes:

```
277 V × √3 = 480 V
```

**Point to point map:**

```
L1 to L2 = 480 V
L2 to L3 = 480 V
L3 to L1 = 480 V
Any L to N = 277 V
```

---

## 208 V Wye: Why 208 Gives You 120

208 V three phase uses the same geometry as 480 V Wye. Each coil is wound for **120 V**, and geometry produces the line voltage.

```
208 V ÷ √3 = 120 V
```

**Point to point map:**

```
L1 to L2 = 208 V
L2 to L3 = 208 V
L3 to L1 = 208 V
Any L to N = 120 V
```

---

## 240 V Split Phase: The Residential Workhorse

Most North American homes receive single phase power from a center-tapped transformer secondary.

The transformer has:

- One 240 V coil  
- A center tap connected to neutral  
- Ends connected as L1 and L2  

This creates:

```
L1 to Neutral = 120 V
L2 to Neutral = 120 V
L1 to L2 = 240 V
```

---

## 240 V Delta: No Neutral Unless You Add One

A classic 240 V delta uses three 240 V coils connected in a triangular loop.

**Point to point:**

```
L1 to L2 = 240 V
L2 to L3 = 240 V
L3 to L1 = 240 V
```

---

## High Leg Delta (Wild Leg Delta)

A high leg delta is a 240 V delta where **one coil is center-tapped** to create a neutral.

**Voltages:**

```
L1 to N = 120 V
L2 to N = 120 V
L3 to N = 208 V
L1 to L2 = 240 V
L2 to L3 = 240 V
L3 to L1 = 240 V
```

---

## Corner Grounded Delta

Any one corner of a delta system can be grounded.

**Example for a 240 V corner grounded delta:**

```
Grounded leg = 0 V to ground
Other legs = 240 V to ground
All phase-to-phase = 240 V
```

---

## Understanding How Voltages Appear on the Pole

Every distribution pole carries:

- A medium-voltage primary (7 kV to 34 kV)  
- One or more distribution transformers  
- A secondary configuration chosen for the site  

The transformer secondary wiring determines everything downstream:

- **Wye** provides line-to-neutral and line-to-line voltages  
- **Delta** provides only line-to-line unless a tap is added  
- **Center tap** produces split phase  

The pole does not inherently produce 480, 208, or 240 volts. The transformer turns ratio and wiring geometry create those voltages.

---

## Interactive Visual Content

The interactive diagram below lets you explore how different transformer configurations generate their respective voltages. Hover over any two points to see the voltage between them, and toggle configurations to observe how geometry shapes the entire system.
