import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/experieceBar.module.css'

export function ExperieceBar() {
    const { currentExperience, experienceToNextLevel, challengesCompleted } = useContext(ChallengesContext)
    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel

    return (
        <header className={styles.experieceBar}>
            <span title="Valor de xp inicial">0xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                {currentExperience > 0 && (
                    <>
                        <span
                            className={styles.currentExperienceSeta}
                            style={{ left: `${percentToNextLevel}%` }}
                        >
                            &#9660;
                        </span>

                        <span
                            className={styles.currentExperience}
                            style={{ left: `${percentToNextLevel}%` }}
                            title={`Falta ${experienceToNextLevel - currentExperience}xp, para alcançar o nível ${challengesCompleted + 1}`}
                        >
                            {currentExperience}xp
                        </span>
                    </>
                )}
            </div>
            <span
                title={`Complete ${experienceToNextLevel}xp para subir de nível!`}
            >
                {experienceToNextLevel}xp
            </span>
        </header>
    )
}