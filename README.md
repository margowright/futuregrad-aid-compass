# >� FutureGrad Aid Compass

**CUNY Financial Aid Navigator for Bachelor's Degree Programs**

A comprehensive web application designed specifically for CUNY students pursuing bachelor's degrees to navigate federal and state financial aid requirements, track their academic progress, and plan for successful degree completion.

## <� Purpose

FutureGrad Aid Compass helps CUNY bachelor's degree students:
- Calculate Federal Aid SAP (Satisfactory Academic Progress) eligibility
- Determine TAP (Tuition Assistance Program) eligibility and remaining points
- Track Maximum Time Frame (MTF) progress toward degree completion
- Plan graduation timelines and maintain aid eligibility

## � Important Notice

**This application is designed exclusively for BACHELOR'S DEGREE programs at CUNY.** Associate degree students and community college students should contact their financial aid office directly for guidance, as they have different SAP requirements and aid structures.

## =� Features

### <� Federal Aid SAP Calculator
- **CUNY-Specific Requirements**: Implements exact CUNY SAP standards for bachelor programs
- **GPA Requirements**: Credit-based thresholds (0.001-12.999, 13-24.999, 25+ credits)
- **Pace Progression**: CUNY's graduated pace requirements for bachelor degrees
- **150% Rule**: Maximum time frame calculations specific to bachelor programs
- **Real-time Validation**: Form validation with helpful error messages

### =� TAP Eligibility Calculator  
- **Program Type Support**: SEEK/College Discovery vs Regular bachelor's programs
- **Point Allocation**: 48 points (regular) vs 60 points (SEEK/College Discovery)
- **Dual GPA Charts**: Separate requirements for SEEK vs Regular programs
- **Payment Tracking**: TAP payment number with completion requirements
- **Credit Validation**: Enrollment (e12) and completion requirements

### =� MTF Calculator
- **150% Time Frame**: Maximum credits allowed for bachelor programs
- **Semester Limits**: 4 years � 2 semesters � 1.5 = 12 semester maximum
- **Pell Grant Integration**: 600% LEU tracking and payments remaining
- **Graduation Planning**: Timeline analysis and required pace calculations
- **Early Warning System**: Color-coded alerts for approaching limits

### =� Comprehensive Dashboard
- **Data Integration**: Pulls results from all three calculators
- **Progress Tracking**: Visual indicators and completion status
- **Summary Calculations**: Total aid estimates and completion percentage
- **Print/Save**: Export functionality for record keeping
- **Data Management**: Start over and clear data options

## <� Design Features

### Visual Design
- **Future Grad Branding**: Consistent color scheme (#7cb8b6, #fab131, #ed5a3f)
- **Compass Theme**: Navigation-inspired design elements throughout
- **Mobile-First**: Responsive design optimized for all devices
- **Professional Layout**: Clean, scannable card-based interface

### User Experience
- **Progressive Navigation**: Step-by-step flow with progress indicators
- **Breadcrumb Navigation**: Clear path tracking between calculators
- **Real-time Validation**: Immediate feedback on form inputs
- **Data Persistence**: Automatic saving and retrieval of calculations
- **Touch-Friendly**: 44px minimum touch targets for mobile users

## =� Project Structure

```
futuregrad-aid-compass/
   index.html                 # Landing page with navigation
   federal-calculator.html    # Federal Aid SAP Calculator
   tap-calculator.html       # TAP Eligibility Calculator  
   mtf-calculator.html       # Maximum Time Frame Calculator
   dashboard.html            # Results dashboard
   css/
      main.css             # (placeholder for external styles)
      mobile.css           # (placeholder for mobile styles)
   js/
      calculations.js      # (placeholder for shared calculations)
      validation.js        # (placeholder for form validation)
      dashboard.js         # (placeholder for dashboard logic)
   assets/                  # (placeholder for images/icons)
   README.md               # Project documentation
```

## =' Technical Implementation

### Frontend Technologies
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with Flexbox and Grid layouts
- **Vanilla JavaScript**: No dependencies, lightweight implementation
- **localStorage**: Client-side data persistence

### CUNY-Specific Calculations

#### Federal SAP Requirements (Bachelor Programs)
```javascript
// GPA Requirements by Credit Range
if (creditsAttempted >= 0.001 && creditsAttempted <= 12.999) � 1.50 minimum
else if (creditsAttempted >= 13 && creditsAttempted <= 24.999) � 1.75 minimum  
else if (creditsAttempted >= 25) � 2.00 minimum

// Pace Progression Requirements (Bachelor Programs)
25-30.999 credits � 14.99% completion required
31-36.999 credits � 24.99% completion required
37-45.999 credits � 34.99% completion required
// ... continues through all credit ranges
```

#### TAP Requirements (Bachelor Programs)
```javascript
// Point Allocation
Regular Bachelor's Program: 48 points total
SEEK/College Discovery: 60 points total

// GPA Charts (separate for SEEK vs Regular)
Regular Payment 1: 6 credits = 1.5, 15 credits = 1.8, 27 credits = 2.0
SEEK Payment 1: 3 credits = 1.1, 9 credits = 1.2, 21 credits = 1.3
```

#### MTF Calculations (Bachelor Programs)
```javascript
// 150% Rule
Maximum Credits = Program Credits � 1.5
Maximum Semesters = 4 years � 2 semesters � 1.5 = 12

// Pell Grant Integration
Maximum LEU = 600% (12 full-time semesters)
Each Semester = 50% LEU usage
```

## =� Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Android Chrome
- **JavaScript**: ES6+ features (requires modern browser support)
- **CSS**: Flexbox and Grid support required

## =� Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/margowright/futuregrad-aid-compass.git
   ```

2. Navigate to the project directory:
   ```bash
   cd futuregrad-aid-compass
   ```

3. Open `index.html` in your browser or serve with a local web server

### Usage Flow
1. **Start**: Visit the landing page (`index.html`)
2. **Federal Calculator**: Complete SAP calculation (Step 1 of 3)
3. **TAP Calculator**: Check TAP eligibility (Step 2 of 3)  
4. **MTF Calculator**: Analyze time frame limits (Step 3 of 3)
5. **Dashboard**: Review comprehensive results and plan next steps

## � Legal Disclaimers

### Important Notices
- **Informational Only**: Results are for guidance only and do not guarantee aid eligibility
- **Self-Reported Data**: All calculations based on student-provided information
- **Official Verification**: Students must verify results with campus financial aid office
- **Program Limitation**: Designed for bachelor's degree programs only

### Data Privacy
- **Local Storage Only**: All data stored locally in browser, not transmitted
- **No Server Communication**: No personal information sent to external servers
- **User Control**: Users can clear all data using "Start Over" function

## =� Development

### Code Style
- **Inline Styles**: All CSS included in HTML files for portability
- **Vanilla JavaScript**: No external dependencies or frameworks
- **Mobile-First**: Responsive design principles throughout
- **Accessibility**: Semantic HTML and keyboard navigation support

### Future Enhancements
- External CSS organization for better maintainability
- Additional calculator for graduate programs
- Integration with CUNY student information systems
- Multi-language support for diverse student population

## =� Support

### For Students
- Contact your campus financial aid office for official guidance
- Consult with academic advisors for degree planning
- Visit CUNY student portal for official records

### For Developers
- Review code comments for implementation details
- Test thoroughly with various input scenarios
- Follow accessibility guidelines for any modifications

## =� License

This project is designed for educational and informational purposes to help CUNY students navigate financial aid requirements. Use at your own discretion and always verify results with official sources.

---

**Built with d for CUNY students pursuing bachelor's degrees**

*FutureGrad Aid Compass - Navigate your financial aid journey with confidence*