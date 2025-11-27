# 🎨 Color System Documentation

This document explains how to use the global CSS color variables system in your agendo-ui application.

## 📁 File Structure

```
src/
├── styles/
│   ├── variables.css    # Global CSS variables
│   ├── example.css      # Usage examples
│   └── README.md        # This documentation
```

## 🚀 Quick Start

1. **Import the variables** (already done in `index.css`)
2. **Use variables** in your CSS modules:

```css
.my-component {
  background: var(--color-blue-600);
  color: var(--color-white);
  border: 1px solid var(--color-grey-200);
}
```

## 🎨 Color Palette

### **Primary Colors (White/Grey/Black)**
- `--color-white`: Pure white (#ffffff)
- `--color-grey-50`: Main background (#f8fafc)
- `--color-grey-100`: Light backgrounds (#f1f5f9)
- `--color-grey-900`: Primary text (#0f172a)

### **Blue Palette**
- `--color-blue-600`: Primary blue (#4f46e5)
- `--color-blue-700`: Hover blue (#4338ca)
- `--color-blue-100`: Light blue backgrounds (#eef2ff)

### **Purple Palette**
- `--color-purple-600`: Primary purple (#9333ea)
- `--color-purple-50`: Light purple backgrounds (#faf5ff)

### **Semantic Colors**
- `--color-success-600`: Success green (#16a34a)
- `--color-warning-600`: Warning orange (#ea580c)
- `--color-error-600`: Error red (#dc2626)

## 🔧 Usage Examples

### **Buttons**
```css
.btn-primary {
  background: var(--color-blue-600);
  color: var(--color-white);
  border: 1px solid var(--color-blue-600);
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}

.btn-primary:hover {
  background: var(--color-blue-700);
}
```

### **Form Inputs**
```css
.form-input {
  border: 1px solid var(--color-grey-300-alt);
  background: var(--color-white);
}

.form-input:focus {
  border-color: var(--color-blue-600);
  box-shadow: 0 0 0 3px var(--color-focus-ring);
}
```

### **Cards**
```css
.card {
  background: var(--color-white);
  border: 1px solid var(--color-grey-200);
  border-radius: 0.5rem;
  box-shadow: var(--color-shadow-sm);
}
```

### **Status Badges**
```css
.status-success {
  background: var(--color-success-50);
  color: var(--color-success-700);
}
```

## 🔄 Migration Guide

### **Old Hardcoded Colors → New Variables**

Replace these common hardcoded colors with variables:

```css
/* OLD - Hardcoded colors */
.my-element {
  background: #4f46e5;
  color: #64748b;
  border: 1px solid #e2e8f0;
}

/* NEW - CSS Variables */
.my-element {
  background: var(--color-blue-600);
  color: var(--color-grey-500);
  border: 1px solid var(--color-grey-200);
}
```

### **Common Replacements**

| Old Color | New Variable | Usage |
|-----------|-------------|--------|
| `#4f46e5` | `--color-blue-600` | Primary actions, links |
| `#4338ca` | `--color-blue-700` | Hover states |
| `#64748b` | `--color-grey-500` | Secondary text |
| `#0f172a` | `--color-grey-900` | Primary text |
| `#f8fafc` | `--color-grey-50` | Backgrounds |
| `#e2e8f0` | `--color-grey-200` | Borders |
| `#16a34a` | `--color-success-600` | Success states |
| `#dc2626` | `--color-error-600` | Error states |

## 🎯 Best Practices

1. **Always use variables** instead of hardcoded colors
2. **Use semantic names** when possible (success, warning, error)
3. **Leverage the palette** - don't add new colors unless absolutely necessary
4. **Test in both light/dark modes** if you plan to support them later

## 🔍 Finding Colors

To find which variable to use for a specific color:

1. Look at the `variables.css` file for the exact hex value
2. Choose the semantically appropriate variable name
3. Use the closest shade in the palette

## 🚨 Important Notes

- All variables are automatically available in all CSS modules
- The variables are imported globally in `index.css`
- No additional imports needed in individual component CSS files
- The system supports easy theming changes in the future
