import React from 'react';
import NavigationHeader from '../../../src/components/NavigationHeader/NavigationHeader';
import Footer from '../../../src/components/Footer/footer';
import styles from './LandingPage.module.css';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className={styles['landing-page']}>
         
        <NavigationHeader />
        <div className={styles['hero-container']}>
            
            <section className={`${styles['hero-section']}`}>
                <div className={`${styles['hero-text']} max-w-lg`}>
                    <h2 className={`${styles.title} text-5xl font-bold text-black`}>
                        Learn by <span className={`${styles['title-highlight']} text-blue-500`}>doing</span>
                    </h2>
                    <p className={`${styles.subtitle} mt-4 text-lg text-gray-700`}>
                        Guided interactive problem solving that's effective and fun. Master concepts in 15 minutes a day.
                    </p>
                    {/* <button className={styles['get-started-button']}>
                        Get started
                    </button> */}
                    <Link to="/signup">
                        <button className={styles['get-started-button']}>Get started</button>
                    </Link>
                </div>
                <div className={styles['hero-image']}>
                    <img src="../../../src/assets/landingpageimg1.png" alt="iPad with interactive content" className={styles['ipad-visual']} />
                </div>
            </section>

            
            <section className={`${styles['category-section']} mt-10 px-6 max-w-5xl mx-auto text-black`}>
                <div className={styles['category-tab']}>
                    <img src="../../../src/assets/icons/math.jpg" alt="Math" className={styles['category-icon']} />
                    <span>Math</span>
                </div>
                <div className={styles['category-tab']}>
                    <img src="../../../src/assets/icons/data.jpg" alt="Data Analysis" className={styles['category-icon']} />
                    <span>Data Analysis</span>
                </div>
                <div className={styles['category-tab']}>
                    <img src="../../../src/assets/icons/cs.jpg" alt="Computer Science" className={styles['category-icon']} />
                    <span>Computer Science</span>
                </div>
                <div className={styles['category-tab']}>
                    <img src="../../../src/assets/icons/AI.jpg" alt="Programming & AI" className={styles['category-icon']} />
                    <span>Programming & AI</span>
                </div>
                <div className={styles['category-tab']}>
                    <img src="../../../src/assets/icons/engg.jpg" alt="Science & Engineering" className={styles['category-icon']} />
                    <span>Science & Engineering</span>
                </div>
            </section>

            
            <section className={`${styles['social-proof-section']} text-center mt-16 px-6`}>
                <p className="text-lg font-medium">Join over 10 million people learning on Brilliant</p>
                <div className="flex justify-center items-center gap-6 mt-4">
                <img src="../../../src/assets/trustpilot-badge.png" alt="Trustpilot" className={styles['social-proof-badge']} />
                <img src="../../../src/assets/app-store-badge.png" alt="App Store" className={styles['social-proof-badge']} />
                </div>
            </section>
        </div>
        {/* Footer Component */}
      <Footer />
    </div>
    
  );
};

export default LandingPage;
