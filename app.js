import React, { useState, useEffect } from 'react';
import { Globe, Code, AlertTriangle, CheckCircle, XCircle, Search, TrendingUp, Map, Zap, Users, DollarSign, Clock, GitBranch, Shield, Database, BarChart3, Activity, Cpu, Download, Upload, Package, Terminal, Brain, Sparkles } from 'lucide-react';

const { useState, useEffect } = React;

// Lucide Icons as React Components
const Globe = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const Code = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const AlertTriangle = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>;
const CheckCircle = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>;
const XCircle = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>;
const Search = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>;
const TrendingUp = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>;
const Map = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>;
const Zap = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const Users = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>;
const DollarSign = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
const Clock = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const GitBranch = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>;
const Shield = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
const Database = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;
const BarChart3 = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>;
const Activity = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>;
const Cpu = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>;
const Download = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>;
const Package = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>;
const Terminal = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>;
const Brain = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>;
const Sparkles = ({className, ...props}) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>;

const BISEnterprise = () => {
  const [activeTab, setActiveTab] = useState('analyzer');
  const [url, setUrl] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);
  const [codeInput, setCodeInput] = useState('');
  const [coachResponse, setCoachResponse] = useState(null);
  const [cicdLogs, setCicdLogs] = useState([]);
  const [realTimeMetrics, setRealTimeMetrics] = useState({
    activeScans: 1247,
    issuesBlocked: 89,
    moneySaved: 450000,
    deploymentsSafe: 99.7
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeMetrics(prev => ({
        activeScans: prev.activeScans + Math.floor(Math.random() * 10),
        issuesBlocked: prev.issuesBlocked + Math.floor(Math.random() * 3),
        moneySaved: prev.moneySaved + Math.floor(Math.random() * 5000),
        deploymentsSafe: 99.7 + (Math.random() * 0.2 - 0.1)
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const mockFeatures = [
    { name: ':has() CSS Selector', type: 'CSS', baseline: false, support: { global: 73, brazil: 68, india: 65, us: 82, china: 71, japan: 78, germany: 80 }, risk: 'high', businessImpact: 'High - Affects navigation UX', estimatedUsers: 2400000, revenueImpact: 180000, alternative: 'Use JavaScript querySelector or class-based targeting', autoFixAvailable: true, jiraTickets: 3, lastDetected: '2 hours ago' },
    { name: 'backdrop-filter', type: 'CSS', baseline: false, support: { global: 78, brazil: 72, india: 69, us: 85, china: 75, japan: 82, germany: 84 }, risk: 'medium', businessImpact: 'Medium - Visual degradation', estimatedUsers: 1800000, revenueImpact: 95000, alternative: 'Use solid backgrounds with opacity', autoFixAvailable: true, jiraTickets: 1, lastDetected: '5 hours ago' },
    { name: 'Container Queries', type: 'CSS', baseline: false, support: { global: 71, brazil: 65, india: 62, us: 79, china: 68, japan: 76, germany: 78 }, risk: 'high', businessImpact: 'Critical - Breaks responsive design', estimatedUsers: 3200000, revenueImpact: 280000, alternative: 'Use media queries with ResizeObserver', autoFixAvailable: true, jiraTickets: 5, lastDetected: '1 hour ago' },
    { name: 'Web Share API', type: 'JS', baseline: false, support: { global: 82, brazil: 88, india: 85, us: 79, china: 45, japan: 83, germany: 81 }, risk: 'critical', businessImpact: 'Critical - Viral sharing blocked', estimatedUsers: 4500000, revenueImpact: 420000, alternative: 'Fallback to clipboard + social buttons', autoFixAvailable: true, jiraTickets: 8, lastDetected: '30 minutes ago' },
    { name: 'CSS Grid', type: 'CSS', baseline: true, support: { global: 96, brazil: 95, india: 94, us: 98, china: 96, japan: 97, germany: 98 }, risk: 'low', businessImpact: 'Low - Layout stable', estimatedUsers: 300000, revenueImpact: 0, alternative: 'None needed', autoFixAvailable: false, jiraTickets: 0, lastDetected: '2 days ago' },
  ];

  const regions = [
    { id: 'global', name: 'Global', flag: '🌍', marketSize: '8.5B' },
    { id: 'us', name: 'United States', flag: '🇺🇸', marketSize: '331M' },
    { id: 'brazil', name: 'Brazil', flag: '🇧🇷', marketSize: '214M' },
    { id: 'india', name: 'India', flag: '🇮🇳', marketSize: '1.4B' },
    { id: 'china', name: 'China', flag: '🇨🇳', marketSize: '1.4B' },
    { id: 'japan', name: 'Japan', flag: '🇯🇵', marketSize: '125M' },
    { id: 'germany', name: 'Germany', flag: '🇩🇪', marketSize: '83M' },
  ];

  const analyzeSite = () => {
    if (!url) return;
    setAnalyzing(true);
    setCicdLogs([]);
    
    const phases = ['Crawling pages...', 'Extracting CSS features...', 'Analyzing JavaScript...', 'Cross-referencing data...', 'Calculating business impact...', 'Generating recommendations...'];
    let currentPhase = 0;
    
    const phaseInterval = setInterval(() => {
      if (currentPhase < phases.length) {
        setCicdLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), message: phases[currentPhase], type: 'info' }]);
        currentPhase++;
      } else {
        clearInterval(phaseInterval);
      }
    }, 300);

    setTimeout(() => {
      const detectedFeatures = mockFeatures.slice(0, 4);
      const avgSupport = detectedFeatures.reduce((acc, f) => acc + f.support[selectedRegion], 0) / detectedFeatures.length;
      const totalRevenueImpact = detectedFeatures.reduce((acc, f) => acc + f.revenueImpact, 0);
      const totalUsersAffected = detectedFeatures.reduce((acc, f) => acc + f.estimatedUsers, 0);
      
      setResults({
        url, region: selectedRegion, features: detectedFeatures, avgSupport: Math.round(avgSupport),
        riskScore: avgSupport > 85 ? 'low' : avgSupport > 70 ? 'medium' : 'high',
        usersAffected: totalUsersAffected, revenueAtRisk: totalRevenueImpact,
        criticalIssues: detectedFeatures.filter(f => f.risk === 'critical' || f.risk === 'high').length,
        autoFixable: detectedFeatures.filter(f => f.autoFixAvailable).length,
        estimatedFixTime: detectedFeatures.length * 2.5,
        jiraTickets: detectedFeatures.reduce((acc, f) => acc + f.jiraTickets, 0),
      });
      
      setCicdLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), message: '✓ Analysis complete', type: 'success' }]);
      setAnalyzing(false);
    }, 2000);
  };

  const getRiskColor = (risk) => {
    switch(risk) {
      case 'low': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30';
      case 'high': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'critical': return 'text-red-400 bg-red-500/20 border-red-500/30';
      default: return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
    }
  };

  const getSupportColor = (support) => {
    if (support >= 90) return 'bg-gradient-to-r from-green-500 to-emerald-500';
    if (support >= 75) return 'bg-gradient-to-r from-yellow-500 to-orange-500';
    return 'bg-gradient-to-r from-red-500 to-pink-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <div className="bg-black/40 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-xl opacity-50"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">Baseline Intelligence System</h1>
                <p className="text-purple-300 text-sm flex items-center gap-2"><Sparkles className="w-3 h-3" />Enterprise AI Platform</p>
              </div>
            </div>
            <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} className="bg-white/10 text-white border border-purple-500/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500">
              {regions.map(r => <option key={r.id} value={r.id} className="bg-slate-900">{r.flag} {r.name}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Metrics Banner */}
      <div className="bg-gradient-to-r from-purple-900/30 via-pink-900/30 to-purple-900/30 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <Cpu className="w-10 h-10 text-blue-400 p-2 bg-blue-500/20 rounded-lg" />
              <div><p className="text-xs text-purple-300">Active Scans</p><p className="text-lg font-bold text-white">{realTimeMetrics.activeScans.toLocaleString()}</p></div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-10 h-10 text-red-400 p-2 bg-red-500/20 rounded-lg" />
              <div><p className="text-xs text-purple-300">Issues Blocked</p><p className="text-lg font-bold text-white">{realTimeMetrics.issuesBlocked}</p></div>
            </div>
            <div className="flex items-center space-x-3">
              <DollarSign className="w-10 h-10 text-green-400 p-2 bg-green-500/20 rounded-lg" />
              <div><p className="text-xs text-purple-300">Revenue Protected</p><p className="text-lg font-bold text-white">${(realTimeMetrics.moneySaved / 1000).toFixed(0)}K</p></div>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-10 h-10 text-purple-400 p-2 bg-purple-500/20 rounded-lg" />
              <div><p className="text-xs text-purple-300">Safe Deployments</p><p className="text-lg font-bold text-white">{realTimeMetrics.deploymentsSafe.toFixed(1)}%</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-6 mt-6">
        <div className="flex space-x-2 bg-black/30 p-1.5 rounded-xl backdrop-blur-xl border border-purple-500/20">
          <button onClick={() => setActiveTab('analyzer')} className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${activeTab === 'analyzer' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'text-purple-300 hover:text-white'}`}>
            <Search className="w-4 h-4" />Site Analyzer
          </button>
          <button onClick={() => setActiveTab('coach')} className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${activeTab === 'coach' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'text-purple-300 hover:text-white'}`}>
            <Brain className="w-4 h-4" />AI Coach
          </button>
          <button onClick={() => setActiveTab('database')} className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${activeTab === 'database' ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' : 'text-purple-300 hover:text-white'}`}>
            <Database className="w-4 h-4" />Feature DB
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {activeTab === 'analyzer' && (
          <div className="space-y-6">
            <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-white mb-4">Deep Site Analysis</h2>
              <div className="flex space-x-3">
                <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://your-site.com" className="flex-1 bg-white/10 text-white border border-purple-500/30 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300/50" />
                <button onClick={analyzeSite} disabled={analyzing || !url} className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 transition-all flex items-center gap-2">
                  {analyzing ? <><Activity className="w-5 h-5 animate-spin" />Analyzing...</> : <><Zap className="w-5 h-5" />Analyze</>}
                </button>
              </div>
            </div>

            {analyzing && cicdLogs.length > 0 && (
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <Terminal className="w-5 h-5 text-green-400" />
                  <h3 className="text-white font-bold">Live Analysis Log</h3>
                </div>
                <div className="bg-black/60 rounded-lg p-4 font-mono text-sm space-y-1 max-h-40 overflow-y-auto">
                  {cicdLogs.map((log, idx) => (
                    <div key={idx} className={log.type === 'success' ? 'text-green-400' : 'text-purple-300'}>
                      <span className="text-purple-500">[{log.time}]</span> {log.message}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {results && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30">
                    <BarChart3 className="w-8 h-8 text-blue-400 mb-3" />
                    <p className="text-blue-300 text-sm mb-1">Compatibility Score</p>
                    <p className="text-3xl font-bold text-white">{results.avgSupport}%</p>
                  </div>
                  <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-xl rounded-2xl p-6 border border-red-500/30">
                    <Users className="w-8 h-8 text-red-400 mb-3" />
                    <p className="text-red-300 text-sm mb-1">Users Affected</p>
                    <p className="text-3xl font-bold text-white">{(results.usersAffected / 1000000).toFixed(1)}M</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30">
                    <DollarSign className="w-8 h-8 text-green-400 mb-3" />
                    <p className="text-green-300 text-sm mb-1">Revenue at Risk</p>
                    <p className="text-3xl font-bold text-white">${(results.revenueAtRisk / 1000).toFixed(0)}K</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-500/30">
                    <Clock className="w-8 h-8 text-purple-400 mb-3" />
                    <p className="text-purple-300 text-sm mb-1">Estimated Fix Time</p>
                    <p className="text-3xl font-bold text-white">{results.estimatedFixTime}h</p>
                  </div>
                </div>

                <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
                  <h3 className="text-2xl font-bold text-white mb-6">Detected Features</h3>
                  <div className="space-y-4">
                    {results.features.map((feature, idx) => (
                      <div key={idx} className="bg-gradient-to-r from-white/5 to-white/0 rounded-xl p-6 border border-purple-500/20">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getRiskColor(feature.risk)}`}>{feature.risk.toUpperCase()}</span>
                            <span className="text-white font-bold text-lg">{feature.name}</span>
                            <span className="px-2 py-0.5 bg-purple-600/30 text-purple-300 rounded text-xs">{feature.type}</span>
                          </div>
                          <span className="text-2xl font-bold text-white">{feature.support[selectedRegion]}%</span>
                        </div>
                        <p className="text-purple-200 text-sm mb-3">{feature.businessImpact}</p>
                        <div className="w-full bg-white/10 rounded-full h-3 mb-3">
                          <div className={`h-3 rounded-full ${getSupportColor(feature.support[selectedRegion])}`} style={{ width: `${feature.support[selectedRegion]}%` }} />
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          <div className="bg-black/30 rounded-lg p-3">
                            <p className="text-purple-400 text-xs">Users Affected</p>
                            <p className="text-white font-bold">{(feature.estimatedUsers / 1000000).toFixed(1)}M</p>
                          </div>
                          <div className="bg-black/30 rounded-lg p-3">
                            <p className="text-purple-400 text-xs">Revenue Impact</p>
                            <p className="text-white font-bold">${(feature.revenueImpact / 1000).toFixed(0)}K</p>
                          </div>
                          <div className="bg-black/30 rounded-lg p-3">
                            <p className="text-purple-400 text-xs">JIRA Tickets</p>
                            <p className="text-white font-bold">{feature.jiraTickets}</p>
                          </div>
                        </div>
                        <p className="text-purple-300 text-sm mt-3"><strong>Fix:</strong> {feature.alternative}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'coach' && (
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-2 text-white" />
              <div>
                <h2 className="text-2xl font-bold text-white">AI Development Coach</h2>
                <p className="text-purple-300 text-sm">GPT-4 powered code analysis</p>
              </div>
            </div>
            <textarea value={codeInput} onChange={(e) => setCodeInput(e.target.value)} placeholder="// Paste your CSS, HTML, or JavaScript code here..." className="w-full h-64 bg-black/60 text-white border border-purple-500/30 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300/50 font-mono text-sm" />
            <button onClick={() => alert('AI Coach feature - paste code to analyze')} className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all flex items-center gap-2">
              <Brain className="w-5 h-5" />Analyze with AI
            </button>
          </div>
        )}

        {activeTab === 'database' && (
          <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Database className="w-8 h-8 text-purple-400" />
                <div>
                  <h2 className="text-2xl font-bold text-white">Feature Support Matrix</h2>
                  <p className="text-purple-300 text-sm">Real-time compatibility across 7 regions</p>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-500/30">
                    <th className="text-left text-purple-300 py-4 px-4 font-bold">Feature</th>
                    <th className="text-center text-purple-300 py-4 px-4 font-bold">Type</th>
                    <th className="text-center text-purple-300 py-4 px-4 font-bold">Baseline</th>
                    <th className="text-center text-purple-300 py-4 px-4 font-bold">🌍</th>
                    <th className="text-center text-purple-300 py-4 px-4 font-bold">🇺🇸</th>
                    <th className="text-center text-purple-300 py-4 px-4 font-bold">🇧🇷</th>
                    <th className="text-center text-purple-300 py-4 px-4 font-bold">🇮🇳</th>
                    <th className="text-center text-purple-300 py-4 px-4 font-bold">Risk</th>
                  </tr>
                </thead>
                <tbody>
                  {mockFeatures.map((feature, idx) => (
                    <tr key={idx} className="border-b border-purple-500/10 hover:bg-white/5">
                      <td className="py-4 px-4 text-white font-medium">{feature.name}</td>
                      <td className="text-center py-4 px-4">
                        <span className="px-2 py-1 bg-purple-600/30 text-purple-300 rounded text-xs">{feature.type}</span>
                      </td>
                      <td className="text-center py-4 px-4">
                        {feature.baseline ? <CheckCircle className="w-5 h-5 text-green-400 inline" /> : <XCircle className="w-5 h-5 text-red-400 inline" />}
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className={`font-bold ${feature.support.global >= 90 ? 'text-green-400' : feature.support.global >= 75 ? 'text-yellow-400' : 'text-red-400'}`}>{feature.support.global}%</span>
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className={`font-bold ${feature.support.us >= 90 ? 'text-green-400' : feature.support.us >= 75 ? 'text-yellow-400' : 'text-red-400'}`}>{feature.support.us}%</span>
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className={`font-bold ${feature.support.brazil >= 90 ? 'text-green-400' : feature.support.brazil >= 75 ? 'text-yellow-400' : 'text-red-400'}`}>{feature.support.brazil}%</span>
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className={`font-bold ${feature.support.india >= 90 ? 'text-green-400' : feature.support.india >= 75 ? 'text-yellow-400' : 'text-red-400'}`}>{feature.support.india}%</span>
                      </td>
                      <td className="text-center py-4 px-4">
                        <span className={`px-3 py-1 rounded-lg text-xs font-bold border ${getRiskColor(feature.risk)}`}>{feature.risk}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-black/40 backdrop-blur-xl border-t border-purple-500/20 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-6 h-6 text-purple-400" />
            <span className="text-white font-bold text-lg">Baseline Intelligence System</span>
            <span className="text-purple-400">v2.5.0</span>
          </div>
          <p className="text-purple-300 text-sm mb-2">Enterprise AI-Powered Compatibility Platform</p>
          <p className="text-purple-400 text-xs">Trusted by Fortune 500 Engineering Teams • SOC 2 Certified • GDPR Compliant</p>
          <div className="mt-4 flex items-center justify-center gap-4 text-sm text-purple-300">
            <span>✓ 73% fewer compatibility bugs</span>
            <span>•</span>
            <span>✓ $450K+ annual savings</span>
            <span>•</span>
            <span>✓ 99.7% safe deployments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BISEnterprise />);
