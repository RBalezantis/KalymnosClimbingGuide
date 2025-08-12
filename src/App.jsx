import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import cragsData from './data/crags';
import './styles.css';
import './styles/med-theme.css';
import CragHeading from './components/CragHeading';

function Home(){
  const [open, setOpen] = useState(() => {
    try { return JSON.parse(localStorage.getItem('openCrags')||'{}') } catch(e){ return {} }
  })
  const [completed, setCompleted] = useState(() => {
    try { return JSON.parse(localStorage.getItem('completedClimbs')||'[]') } catch(e){ return [] }
  })

  useEffect(()=>{ localStorage.setItem('openCrags', JSON.stringify(open)) }, [open])
  useEffect(()=>{ localStorage.setItem('completedClimbs', JSON.stringify(completed)) }, [completed])

  const toggleCrag = (name) => setOpen(prev => ({ ...prev, [name]: !prev[name]}))
  const toggleClimb = (id) => setCompleted(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id])

  return (
    <div className="container">
      <h1>Kalymnos — Crags & Routes</h1>
      {Object.entries(cragsData).map(([cragName, cragData])=> (
        <div className="crag" key={cragName}>
          <div className="crag-header" onClick={()=>toggleCrag(cragName)}>
            <CragHeading
              cragKey={cragName}
              subtitle={`${cragData.climbs.length} routes • ${cragData.description.split('.')[0]}`}
            />
            <div className="crag-divider" />
            <div>{open[cragName] ? 'Hide' : 'Show'}</div>
          </div>
          {open[cragName] && (
            <div className="crag-body">
              <img className="crag-image" src={cragData.image} alt={cragName} />
              <p className="small">{cragData.description}</p>
              <h4>Top routes ({cragData.climbs.length})</h4>
              <div>
                {cragData.climbs.map(c=> (
                  <div className="climb-item" key={c.id}>
                    <label className="climb-meta">
                      <input type="checkbox" checked={completed.includes(c.id)} onChange={()=>toggleClimb(c.id)} /> <strong>{c.name}</strong> — {c.grade} — {c.length} m
                    </label>
                    <div className="small">{c.comment}</div>
                    <div className="small">
                      {c.mpLink && <a className="link" href={c.mpLink} target="_blank" rel="noreferrer">MountainProject</a>}
                      {c.cragLink && <> | <a className="link" href={c.cragLink} target="_blank" rel="noreferrer">TheCrag</a></>}
                      <span style={{color:'#888'}}> | Last checked: {c.lastChecked}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function Summary(){
  const [completed] = useState(() => {
    try { return JSON.parse(localStorage.getItem('completedClimbs')||'[]') } catch(e){ return [] }
  })
  const flattened = Object.values(cragsData).flatMap(d=>d.climbs)
  const done = flattened.filter(c=>completed.includes(c.id))
  return (
    <div className="container">
      <h1>Completed Climbs</h1>
      {done.length===0 ? <p>No climbs completed yet.</p> : (
        <ul>{done.map(d=> <li key={d.id}>{d.name} — {d.grade} — {d.length} m</li>)}</ul>
      )}
    </div>
  )
}

function RestDays(){
  return (
    <div className="container">
      <h1>Rest Days</h1>
      <ul>
        <li><strong>Day A — Telendos island:</strong> Boat to Telendos, swim/snorkel, explore; Dinner — seafood taverna in Myrties</li>
        <li><strong>Day B — Beach & massage:</strong> Morning yoga, sports massage, beach; Dinner — Grill/BBQ in Masouri</li>
        <li><strong>Day C — Cultural & scenic:</strong> Scooter to Potamia & viewpoints; Dinner — traditional mezze with live music</li>
      </ul>
    </div>
  )
}

export default function App(){
  return (
    <div>
      <header className="header">
        <div style={{fontWeight:700}}>Kalymnos Climbing Guide</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/summary">Summary</Link>
          <Link to="/rest-days">Rest Days</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/summary" element={<Summary/>} />
        <Route path="/rest-days" element={<RestDays/>} />
      </Routes>
      <footer className="footer">Updated (Aug 11, 2025)</footer>
    </div>
  )
}
