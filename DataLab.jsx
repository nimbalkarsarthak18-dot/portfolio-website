import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Filter, Search, Wrench, Cpu, CheckCircle2, Rocket, Play, Activity } from 'lucide-react';

export default function DataLab() {
  const [activeStage, setActiveStage] = useState('TRAIN');
  const [isSimulating, setIsSimulating] = useState(false);

  const stages = [
    {
      id: 'DATA',
      step: '01',
      title: 'DATA',
      icon: <Database size={16} />,
      desc: 'Raw ingestion of transactional, sensor, and academic records.',
      status: 'INGESTION // SQL & CSV',
      simulation: {
        code: `import pandas as pd\nraw_data = pd.read_csv('telemetry_records.csv')\nprint(f"Ingested shape: {raw_data.shape}")  # (24500, 18)`,
        metricLabel: 'RAW RECORDS LOADED',
        metricVal: '24,500 ROWS',
        submetric: '18 Raw Features'
      }
    },
    {
      id: 'CLEAN',
      step: '02',
      title: 'CLEAN',
      icon: <Filter size={16} />,
      desc: 'Handling missing nulls, outlier trimming (IQR), and type cast assertions.',
      status: 'DATA QUALITY // 99.98% CLEAN',
      simulation: {
        code: `df = raw_data.dropna(subset=['target'])\ndf['timestamp'] = pd.to_datetime(df['timestamp'])\ndf = df[df['val'].between(q01, q99)]  # Outliers trimmed`,
        metricLabel: 'NULL IMPUTATION RATE',
        metricVal: '0.00% REMAINING',
        submetric: '142 Anomalies Pruned'
      }
    },
    {
      id: 'EXPLORE',
      step: '03',
      title: 'EXPLORE',
      icon: <Search size={16} />,
      desc: 'Correlation heatmaps, skewness analysis, and distribution histograms.',
      status: 'EDA // SEABORN & STATS',
      simulation: {
        code: `corr_matrix = df.corr(method='pearson')\nsns.heatmap(corr_matrix, cmap='coolwarm')\nprint(f"Top correlation with target: {corr_matrix['y'].nlargest(3)}")`,
        metricLabel: 'PEARSON CORRELATION',
        metricVal: 'r = 0.874 MAX',
        submetric: 'p < 0.001 Significance'
      }
    },
    {
      id: 'ENGINEER',
      step: '04',
      title: 'ENGINEER',
      icon: <Wrench size={16} />,
      desc: 'One-hot encoding, standard scaling, polynomial interaction terms.',
      status: 'SIGNAL EXTRACTION',
      simulation: {
        code: `from sklearn.preprocessing import StandardScaler, OneHotEncoder\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X_numeric)\nX_encoded = pd.get_dummies(X_cat, drop_first=True)`,
        metricLabel: 'TRANSFORMED DIMENSIONS',
        metricVal: '32 ENGINEERED COLS',
        submetric: 'Normalized to N(0, 1)'
      }
    },
    {
      id: 'TRAIN',
      step: '05',
      title: 'TRAIN',
      icon: <Cpu size={16} />,
      desc: 'Ensemble model convergence, Random Forest bagging, cross-validation.',
      status: 'HYPERPARAMETER OPTIMIZATION',
      simulation: {
        code: `from sklearn.ensemble import RandomForestRegressor\nmodel = RandomForestRegressor(n_estimators=100, max_depth=12, random_state=42)\nmodel.fit(X_train, y_train)`,
        metricLabel: 'CROSS-VAL SCORE (R²)',
        metricVal: '0.942 ± 0.01',
        submetric: '100 Estimator Trees'
      }
    },
    {
      id: 'EVALUATE',
      step: '06',
      title: 'EVALUATE',
      icon: <CheckCircle2 size={16} />,
      desc: 'Residual analysis, RMSE error calculation, ROC-AUC calibration curve.',
      status: 'VALIDATION METRICS',
      simulation: {
        code: `from sklearn.metrics import mean_squared_error, r2_score\ny_pred = model.predict(X_test)\nrmse = np.sqrt(mean_squared_error(y_test, y_pred))\nr2 = r2_score(y_test, y_pred)`,
        metricLabel: 'TEST RMSE DEVIATION',
        metricVal: '1.24 UNITS',
        submetric: 'Residual Variance Minimal'
      }
    },
    {
      id: 'DEPLOY',
      step: '07',
      title: 'DEPLOY',
      icon: <Rocket size={16} />,
      desc: 'Joblib serialization, low-latency API inference, and edge telemetry.',
      status: 'PRODUCTION SERIALIZATION',
      simulation: {
        code: `import joblib\njoblib.dump(model, 'model_v1.joblib')\n# Inference latency: < 12ms per sample on edge host`,
        metricLabel: 'INFERENCE LATENCY',
        metricVal: '11.8 ms',
        submetric: 'Joblib Binary Ready'
      }
    }
  ];

  const currentStageData = stages.find((s) => s.id === activeStage) || stages[4];

  const handleTriggerSim = () => {
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 900);
  };

  return (
    <section
      id="datalab"
      style={{
        padding: '7rem 2rem',
        position: 'relative',
        backgroundColor: '#050505',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
      className="tech-grid-bg"
    >
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              fontWeight: 700,
              color: '#ff2a3a',
              letterSpacing: '3px'
            }}
          >
            03 / DATA LAB
          </span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(229, 9, 20, 0.25)' }} />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.7rem',
              color: '#52525b',
              letterSpacing: '2px'
            }}
          >
            INTERACTIVE ANALYTICS LABORATORY
          </span>
        </div>

        {/* Title */}
        <div style={{ marginBottom: '3.5rem' }}>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: '-1px',
              color: '#ffffff',
              textTransform: 'uppercase',
              margin: '0 0 1rem 0'
            }}
          >
            END-TO-END DATA SCIENCE<br />
            <span style={{ color: '#ff2a3a' }}>WORKFLOW & PIPELINE</span>
          </h2>
          <p
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.05rem',
              color: '#8e8e99',
              maxWidth: '680px',
              lineHeight: 1.6
            }}
          >
            An interactive inspection of how raw observations transform through disciplined
            cleaning, statistical exploratory analysis, feature extraction, and machine learning deployment.
          </p>
        </div>

        {/* Pipeline Stepper (DATA ↓ CLEAN ↓ EXPLORE ↓ ENGINEER ↓ TRAIN ↓ EVALUATE ↓ DEPLOY) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.5rem',
            overflowX: 'auto',
            paddingBottom: '1.5rem',
            marginBottom: '3rem'
          }}
          className="pipeline-stepper"
        >
          {stages.map((st, idx) => {
            const isActive = activeStage === st.id;
            return (
              <React.Fragment key={st.id}>
                <button
                  onClick={() => setActiveStage(st.id)}
                  data-magnetic="true"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.9rem 1.1rem',
                    background: isActive ? 'rgba(229, 9, 20, 0.22)' : 'rgba(12, 12, 16, 0.8)',
                    border: isActive ? '1px solid #ff1a2a' : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px',
                    minWidth: '120px',
                    boxShadow: isActive ? '0 0 20px rgba(229, 9, 20, 0.45)' : 'none',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      color: isActive ? '#ff1a2a' : '#52525b'
                    }}
                  >
                    STEP {st.step}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: isActive ? '#ff2a3a' : '#8e8e99' }}>{st.icon}</span>
                    <span
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        color: isActive ? '#ffffff' : '#a1a1aa'
                      }}
                    >
                      {st.title}
                    </span>
                  </div>
                </button>

                {idx < stages.length - 1 && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#444',
                      fontSize: '0.9rem',
                      fontFamily: "'JetBrains Mono', monospace",
                      padding: '0 4px'
                    }}
                  >
                    →
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Laboratory Console Screen */}
        <div
          style={{
            background: 'rgba(10, 10, 14, 0.95)',
            border: '1px solid rgba(229, 9, 20, 0.35)',
            borderRadius: '6px',
            overflow: 'hidden',
            boxShadow: '0 0 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(229, 9, 20, 0.15)'
          }}
          className="hud-corner"
        >
          {/* Terminal Console Top Bar */}
          <div
            style={{
              padding: '0.75rem 1.5rem',
              background: 'rgba(14, 14, 20, 0.95)',
              borderBottom: '1px solid rgba(229, 9, 20, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.75rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#ff1a2a',
                  boxShadow: '0 0 8px #ff1a2a'
                }}
              />
              <span style={{ color: '#ffffff' }}>LAB CONSOLE: STAGE_{currentStageData.id}</span>
              <span style={{ color: '#52525b' }}>// {currentStageData.status}</span>
            </div>

            <button
              onClick={handleTriggerSim}
              data-magnetic="true"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                background: isSimulating ? '#ff1a2a' : 'rgba(229, 9, 20, 0.15)',
                border: '1px solid #ff1a2a',
                borderRadius: '3px',
                color: '#ffffff',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.7rem',
                transition: 'all 0.2s ease'
              }}
            >
              <Play size={12} />
              {isSimulating ? 'SIMULATING...' : 'EXECUTE PIPELINE'}
            </button>
          </div>

          {/* Console Body Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem',
              padding: '2rem'
            }}
            className="datalab-console-body"
          >
            {/* Code / Algorithm Preview */}
            <div
              style={{
                background: '#060608',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '4px',
                padding: '1.25rem',
                position: 'relative'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.75rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.7rem',
                  color: '#71717a'
                }}
              >
                <span>PYTHON SCRIPT // pipeline_stage.py</span>
                <span style={{ color: '#ff2a3a' }}>PYTHON 3.10+</span>
              </div>

              <pre
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '0.85rem',
                  color: '#d4d4d8',
                  lineHeight: 1.6,
                  overflowX: 'auto',
                  margin: 0
                }}
              >
                <code>{currentStageData.simulation.code}</code>
              </pre>
            </div>

            {/* Live Metrics & Telemetry Card */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'rgba(15, 15, 20, 0.6)',
                border: '1px solid rgba(229, 9, 20, 0.2)',
                borderRadius: '4px',
                padding: '1.5rem'
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#71717a',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                  }}
                >
                  STAGE TELEMETRY OUTPUT
                </div>
                <h4
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: '1.4rem',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}
                >
                  {currentStageData.desc}
                </h4>
              </div>

              {/* Dynamic Metric display */}
              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1.25rem',
                  background: 'rgba(5, 5, 8, 0.8)',
                  border: '1px solid rgba(229, 9, 20, 0.3)',
                  borderRadius: '4px'
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    color: '#ff2a3a',
                    letterSpacing: '1px',
                    marginBottom: '4px'
                  }}
                >
                  {currentStageData.simulation.metricLabel}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '4px'
                  }}
                >
                  {currentStageData.simulation.metricVal}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.8rem',
                    color: '#a1a1aa'
                  }}
                >
                  {currentStageData.simulation.submetric}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .datalab-console-body {
            grid-template-columns: 1.2fr 0.8fr !important;
          }
        }
        .pipeline-stepper::-webkit-scrollbar {
          height: 4px;
        }
        .pipeline-stepper::-webkit-scrollbar-thumb {
          background: rgba(229, 9, 20, 0.4);
        }
      `}</style>
    </section>
  );
}
