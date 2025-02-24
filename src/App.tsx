import React, { useState } from 'react';
import { AlertCircle, BarChart3, Box, Truck } from 'lucide-react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PartsInfo from './components/PartsInfo';
import ScenarioEvaluation from './components/ScenarioEvaluation';
import AlertsMonitoring from './components/AlertsMonitoring';

export type Screen = 'parts' | 'scenarios' | 'alerts';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeScreen, setActiveScreen] = useState<Screen>('parts');

  const navItems = [
    { id: 'parts', label: 'Parts Dashboard', icon: Box },
    { id: 'scenarios', label: 'Scenario Evaluation', icon: BarChart3 },
    { id: 'alerts', label: 'Alerts & Monitoring', icon: AlertCircle },
  ];

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Dashboard 
      navItems={navItems}
      activeScreen={activeScreen}
      onScreenChange={(screen: Screen) => setActiveScreen(screen)}
    >
      {activeScreen === 'parts' && <PartsInfo />}
      {activeScreen === 'scenarios' && <ScenarioEvaluation />}
      {activeScreen === 'alerts' && <AlertsMonitoring />}
    </Dashboard>
  );
}

export default App;