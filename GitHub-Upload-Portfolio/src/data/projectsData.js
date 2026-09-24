export const projectsData = [
  {
    id: '01',
    title: 'STUDENT SCORE PREDICTION',
    category: 'Machine Learning',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Joblib'],
    models: ['Linear Regression', 'Decision Tree', 'Random Forest'],
    shortDesc: 'Machine learning system for predicting student scores using preprocessing, EDA, feature engineering, regression models and evaluation.',
    fullDesc: 'End-to-end predictive analytics pipeline designed to model and forecast student academic performance. Employs comprehensive data preprocessing, outlier detection, correlation analysis, and hyperparameter-tuned regression algorithms to identify critical performance drivers.',
    architecture: 'Input Features → Data Cleaning & Imputation → Feature Scaling → Model Ensemble (Linear Regression / Decision Tree / Random Forest) → Joblib Serialization',
    metrics: [
      { label: 'Evaluation Metric', value: 'R² Score & RMSE' },
      { label: 'Primary Algorithm', value: 'Random Forest Regressor' },
      { label: 'Pipeline State', value: 'Serialized via Joblib' }
    ],
    githubUrl: 'https://github.com/nimbalkarsarthak18-dot/student-score-prediction',
    isRealRepoPlaceholder: true,
    highlight: 'Ensemble Regression Pipeline',
    status: 'COMPLETED'
  },
  {
    id: '02',
    title: 'EMPLOYEE SALARY PREDICTION',
    category: 'Machine Learning',
    tech: ['Python', 'Pandas', 'Scikit-learn'],
    models: ['Polynomial Regression', 'Ridge Regression', 'Random Forest'],
    shortDesc: 'Regression-based compensation analytics engine evaluating experience curves, skill tiers, and market data.',
    fullDesc: 'Predictive compensation architecture evaluating salary trends based on multi-variate professional attributes. Utilizes rigorous feature encoding and regularized regression to prevent overfitting across non-linear compensation brackets.',
    architecture: 'Raw Candidate Data → One-Hot Encoding → Standard Scaler → Cross-Validation Tuning → Model Inference',
    metrics: [
      { label: 'Objective', value: 'Continuous Valuation' },
      { label: 'Feature Types', value: 'Numerical + Categorical' },
      { label: 'Evaluation', value: 'Mean Absolute Error' }
    ],
    githubUrl: 'https://github.com/nimbalkarsarthak18-dot/employee-salary-prediction',
    isRealRepoPlaceholder: true,
    highlight: 'Compensation Forecasting',
    status: 'COMPLETED'
  },
  {
    id: '03',
    title: 'CUSTOMER CHURN PREDICTION',
    category: 'Machine Learning',
    tech: ['Python', 'Classification', 'Scikit-learn'],
    models: ['Logistic Regression', 'Random Forest Classifier'],
    shortDesc: 'Predictive customer retention model identifying churn risks through behavioural signals and classification pipelines.',
    fullDesc: 'Binary classification pipeline that processes telecom/subscription customer behavioral records. Highlights early churn signals, identifies at-risk accounts, and produces actionable probability scores for retention strategy.',
    architecture: 'Customer Telemetry → Class Imbalance Handling → Feature Importance → Binary Classifier → Risk Probability Output',
    metrics: [
      { label: 'Target', value: 'Binary Churn Flag' },
      { label: 'Primary Metric', value: 'ROC-AUC & Precision' },
      { label: 'Key Strategy', value: 'Threshold Calibration' }
    ],
    githubUrl: 'https://github.com/nimbalkarsarthak18-dot/customer-churn-prediction',
    isRealRepoPlaceholder: true,
    highlight: 'Retention Analytics',
    status: 'COMPLETED'
  },
  {
    id: '04',
    title: 'SALES DATA ANALYSIS',
    category: 'Data Analytics',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    models: ['Exploratory Data Analysis', 'Statistical Inference'],
    shortDesc: 'Comprehensive exploratory data analysis uncovering sales velocity, seasonality trends, product category performances, and visual telemetry.',
    fullDesc: 'Deep analytical exploration of multi-year sales transaction logs. Identifies seasonal demand cycles, gross margin distributions by region, customer cohort velocity, and high-margin product categories through high-fidelity visual telemetry.',
    architecture: 'Transactional Data → Timestamp Extraction → Aggregation & Pivot → Seaborn Statistical Plotting → Executive Insights',
    metrics: [
      { label: 'Analysis Depth', value: 'Multi-year Historical' },
      { label: 'Visual Engine', value: 'Matplotlib & Seaborn' },
      { label: 'Core Insight', value: 'Seasonality & Margin Shifts' }
    ],
    githubUrl: 'https://github.com/nimbalkarsarthak18-dot/sales-data-analysis',
    isRealRepoPlaceholder: true,
    highlight: 'Visual Data Intelligence',
    status: 'COMPLETED'
  },
  {
    id: '05',
    title: 'HOUSE PRICE PREDICTION',
    category: 'Machine Learning',
    tech: ['Python', 'Regression', 'Random Forest'],
    models: ['Random Forest Regressor', 'Linear Regression'],
    shortDesc: 'Real estate valuation engine incorporating spatial features, square footage, and neighborhood metrics with ensemble regression.',
    fullDesc: 'Valuation modeling engine designed to handle multi-collinear housing market variables. Applies log transformations, geo-spatial coordinate clustering, and ensemble tree modeling to predict residential prices accurately.',
    architecture: 'Housing Dataset → Log Transform on Skewed Targets → Geospatial Feature Encoding → Random Forest Ensemble',
    metrics: [
      { label: 'Model Family', value: 'Tree-based Ensemble' },
      { label: 'Target Metric', value: 'RMSE / Adjusted R²' },
      { label: 'Feature Count', value: 'Multi-attribute Housing Attributes' }
    ],
    githubUrl: 'https://github.com/nimbalkarsarthak18-dot/house-price-prediction',
    isRealRepoPlaceholder: true,
    highlight: 'Spatial Real Estate Modeling',
    status: 'COMPLETED'
  },
  {
    id: '06',
    title: 'CUSTOMER SEGMENTATION',
    category: 'Data Analytics',
    tech: ['Python', 'K-Means', 'Data Analysis'],
    models: ['K-Means Clustering', 'Elbow Method', 'Silhouette Analysis'],
    shortDesc: 'Unsupervised clustering pipeline grouping high-value customer cohorts by purchasing patterns and frequency.',
    fullDesc: 'Machine learning segmentation engine utilizing unsupervised K-Means clustering. Analyzes Recency, Frequency, and Monetary (RFM) characteristics to separate distinct customer personas for targeted marketing optimization.',
    architecture: 'Customer Transaction Log → RFM Calculation → Feature Normalization → Optimal K Selection (Elbow Curve) → Persona Profiling',
    metrics: [
      { label: 'Algorithm', value: 'K-Means Clustering' },
      { label: 'Optimization', value: 'Silhouette Coefficient' },
      { label: 'Output', value: 'Behavioral Persona Matrix' }
    ],
    githubUrl: 'https://github.com/nimbalkarsarthak18-dot/customer-segmentation',
    isRealRepoPlaceholder: true,
    highlight: 'Unsupervised Persona Clustering',
    status: 'COMPLETED'
  },
  {
    id: '07',
    title: 'LOAN APPROVAL PREDICTION',
    category: 'Machine Learning',
    tech: ['Python', 'Classification', 'Logistic Regression'],
    models: ['Logistic Regression', 'Decision Tree Classifier'],
    shortDesc: 'Financial risk classification model analyzing applicant credit history, income ratios, and default probabilities.',
    fullDesc: 'Automated credit risk assessment framework that predicts loan approval decisions. Cleans missing banking records, standardizes applicant and co-applicant income variables, and outputs transparent classification decisions.',
    architecture: 'Credit Applicant Records → Missing Value Imputation → Normalization → Logistic Regression Classifier → Risk Classification',
    metrics: [
      { label: 'Domain', value: 'Credit Risk Scoring' },
      { label: 'Model', value: 'Logistic Regression' },
      { label: 'Output', value: 'Approval / Denial Prediction' }
    ],
    githubUrl: 'https://github.com/nimbalkarsarthak18-dot/loan-approval-prediction',
    isRealRepoPlaceholder: true,
    highlight: 'Credit Risk Classification',
    status: 'COMPLETED'
  },
  {
    id: '08',
    title: 'THERMAL CAMERA RESCUE ROBOT',
    category: 'IoT & Robotics',
    tech: ['ESP32', 'MLX90640', 'Raspberry Pi', 'IoT', 'Robotics'],
    models: ['Hardware Control', 'Thermal Matrix Processing', 'Edge Web Server'],
    shortDesc: 'Autonomous and teleoperated search-and-rescue rover streaming a 32x24 thermal heat matrix via ESP32 to a Raspberry Pi server with real-time obstacle avoidance.',
    fullDesc: 'Advanced cyber-physical rover engineered for emergency search-and-rescue missions in hazardous, low-visibility, or high-smoke disaster scenarios. Combines an MLX90640 Far-Infrared sensor array, dual-mode autonomous ultrasonic obstacle avoidance, and Wi-Fi teleoperation.',
    architecture: 'MLX90640 Thermal Array → ESP32 Edge Processor → Wi-Fi UDP/HTTP Stream → Raspberry Pi Central Dashboard → Client Web HUD',
    metrics: [
      { label: 'Thermal Grid', value: '32 × 24 (768 Pixels)' },
      { label: 'Edge Controllers', value: 'ESP32 + Raspberry Pi' },
      { label: 'Drive System', value: 'L298N + 4 DC Motors' }
    ],
    githubUrl: 'https://github.com/nimbalkarsarthak18-dot/thermal-camera-rescue-robot',
    isRealRepoPlaceholder: true,
    highlight: 'Flagship Cyber-Physical System',
    status: 'PROTOTYPE ACTIVE'
  },
  {
    id: '09',
    title: 'SMART AGRICULTURE IoT',
    category: 'IoT & Robotics',
    tech: ['ESP32', 'DHT11', 'Soil Moisture', 'Relay', 'Motor'],
    models: ['Closed-Loop Feedback Control', 'Sensor Telemetry'],
    shortDesc: 'Closed-loop automated agricultural environment monitoring temperature, humidity, and soil moisture to trigger intelligent water irrigation.',
    fullDesc: 'Autonomous precision irrigation and micro-climate management unit. Reads continuous volumetric soil moisture and atmospheric DHT11 data to control submersible relay-driven water pumps and maintain optimal agronomic moisture thresholds.',
    architecture: 'DHT11 + Capacitive Soil Sensor → ESP32 ADC & GPIO → State-Machine Threshold Logic → Relay Trigger → Submersible Motor',
    metrics: [
      { label: 'Sensors', value: 'DHT11 + Soil Moisture' },
      { label: 'Actuation', value: 'Relay + DC Water Motor' },
      { label: 'Operation', value: '24/7 Autonomous Threshold Loop' }
    ],
    githubUrl: 'https://github.com/nimbalkarsarthak18-dot/smart-agriculture-iot',
    isRealRepoPlaceholder: true,
    highlight: 'Autonomous Closed-Loop IoT',
    status: 'COMPLETED'
  }
];
