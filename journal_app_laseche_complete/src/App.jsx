import { useState } from 'react'

const journal = {
  lundi: {
    entrainement: "Escalade",
    repas: [
      "Petit-déj : Bol au yaourt & pomme caramélisée",
      "Déjeuner : Taboulé de poulet à l’orientale",
      "Collation : Compote de pommes",
      "Dîner : Salade de saumon fumé, œuf, avocat, feta + skyr"
    ],
    sport: [
      "Échauffement : 15 min",
      "Grimpe blocs ou voies : 60 min",
      "Retour au calme : 10 min"
    ]
  }
}

export default function JournalAlimentaire() {
  const [checked, setChecked] = useState({})

  return (
    <div style={{ padding: 20 }}>
      <h1>Journal LaSèche + Entraînement</h1>
      {Object.entries(journal).map(([day, { entrainement, repas, sport }]) => (
        <div key={day} style={{ marginBottom: 20 }}>
          <h2>{day.toUpperCase()}</h2>
          <p><strong>Entraînement :</strong> {entrainement}</p>
          <p><strong>Repas :</strong></p>
          <ul>
            {repas.map((item, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  checked={checked[`${day}-repas-${i}`] || false}
                  onChange={() =>
                    setChecked(prev => ({
                      ...prev,
                      [`${day}-repas-${i}`]: !prev[`${day}-repas-${i}`]
                    }))
                  }
                />
                {" "}{item}
              </li>
            ))}
          </ul>
          <p><strong>Séance :</strong></p>
          <ul>
            {sport.map((item, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  checked={checked[`${day}-sport-${i}`] || false}
                  onChange={() =>
                    setChecked(prev => ({
                      ...prev,
                      [`${day}-sport-${i}`]: !prev[`${day}-sport-${i}`]
                    }))
                  }
                />
                {" "}{item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}