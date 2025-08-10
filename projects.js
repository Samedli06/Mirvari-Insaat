// Simple project display - no complex JavaScript needed
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the projects grid
    const projectsGrid = document.getElementById('projectsGrid');
    
    // All projects HTML with real images
    const projectsHTML = `
        <div class="project-card" data-category="infrastructure">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/Avromed Ərazinin setka hasara alinmasi.jpg" alt="Avromed Hasarlama İşləri" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">Avromed - Hasarlama İşləri</h3>
                <p class="project-description">Ərazinin setka hasara alınması işləri</p>
                <span class="project-category">İnfrastruktur</span>
            </div>
        </div>
        
        <div class="project-card" data-category="design">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/Dizayn işləri.jpg" alt="Professional Dizayn İşləri" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">Professional Dizayn İşləri</h3>
                <p class="project-description">Dizayn və layihələndirmə xidmətləri</p>
                <span class="project-category">Dizayn</span>
            </div>
        </div>
        
        <div class="project-card" data-category="infrastructure">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/ECOLE LEGAL CENTRE - landşaft işləri görülməsi.jpg" alt="ECOLE LEGAL CENTRE Landşaft" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">ECOLE LEGAL CENTRE - Landşaft</h3>
                <p class="project-description">Landşaft işlərinin görülməsi</p>
                <span class="project-category">Landşaft İşləri</span>
            </div>
        </div>
        
        <div class="project-card" data-category="construction">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/FMG  Hillside Residence metal konstruksiya işləri.jpg" alt="FMG Hillside Residence" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">FMG Hillside Residence</h3>
                <p class="project-description">Metal konstruksiya işlərinin görülməsi</p>
                <span class="project-category">Metal Konstruksiya</span>
            </div>
        </div>
        
        <div class="project-card" data-category="renovation">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/FMG  Xəzri Residence təmir bərpa işlər.jpg" alt="FMG Xəzri Residence" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">FMG Xəzri Residence</h3>
                <p class="project-description">Təmir bərpa işlərinin həyata keçirilməsi</p>
                <span class="project-category">Təmir-Bərpa</span>
            </div>
        </div>
        
        <div class="project-card" data-category="renovation">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/FMG Dalğa plaza   Daxili bəzək işləri.jpg" alt="FMG Dalğa Plaza" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">FMG Dalğa Plaza</h3>
                <p class="project-description">Daxili bəzək işlərinin görülməsi</p>
                <span class="project-category">Daxili Bəzək</span>
            </div>
        </div>
        
        <div class="project-card" data-category="infrastructure">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/FMG Gümüş Plazada yol işlərinin görülməsi.jpg" alt="FMG Gümüş Plaza" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">FMG Gümüş Plaza</h3>
                <p class="project-description">Yol işlərinin görülməsi</p>
                <span class="project-category">Yol İşləri</span>
            </div>
        </div>
        
        <div class="project-card" data-category="renovation">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/FMG Nizami Residence  fasadin yeninlənməsi.jpg" alt="FMG Nizami Residence" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">FMG Nizami Residence</h3>
                <p class="project-description">Fasadın yenilənməsi işləri</p>
                <span class="project-category">Fasad İşləri</span>
            </div>
        </div>
        
        <div class="project-card" data-category="infrastructure">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/FMG Vurğun Residence   Su kanalizyasiya xəttlərin quraşdirilmasi.jpg" alt="FMG Vurğun Residence" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">FMG Vurğun Residence</h3>
                <p class="project-description">Su kanalizasiya xəttlərinin quraşdırılması</p>
                <span class="project-category">Su-Kanalizasiya</span>
            </div>
        </div>
        
        <div class="project-card" data-category="construction">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/FMG İsr Residence Məhəccərlərin quraşdilirmasi.jpg" alt="FMG İSR Residence" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">FMG İSR Residence</h3>
                <p class="project-description">Məhəccərlərin quraşdırılması işləri</p>
                <span class="project-category">Məhəccər İşləri</span>
            </div>
        </div>
        
        <div class="project-card" data-category="renovation">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/HİC MMC  söküntü işləri görülməsi.jpg" alt="HİC MMC Söküntü İşləri" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">HİC MMC - Söküntü İşləri</h3>
                <p class="project-description">Professional söküntü işlərinin görülməsi</p>
                <span class="project-category">Söküntü</span>
            </div>
        </div>
        
        <div class="project-card" data-category="renovation">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/HİC MMC yaşayiş binasinin fasadin yuyulmasi.jpg" alt="HİC MMC Fasad Təmizliyi" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">HİC MMC - Fasad Təmizliyi</h3>
                <p class="project-description">Yaşayış binasının fasadının yuyulması</p>
                <span class="project-category">Fasad Təmizliyi</span>
            </div>
        </div>
        
        <div class="project-card" data-category="construction">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/mcdonald's qapi pəncərə işləri.jpg" alt="McDonald's" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">McDonald's</h3>
                <p class="project-description">Qapı pəncərə işlərinin görülməsi</p>
                <span class="project-category">Qapı-Pəncərə</span>
            </div>
        </div>
        
        <div class="project-card" data-category="renovation">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/Pasha malls daxili quraşdirma işləri.jpg" alt="Pasha Malls" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">Pasha Malls</h3>
                <p class="project-description">Daxili quraşdırma işlərinin həyata keçirilməsi</p>
                <span class="project-category">Daxili Quraşdırma</span>
            </div>
        </div>
        
        <div class="project-card" data-category="infrastructure">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/PMD PROJECTS Zəfər  parki ərazsində Birqada. Və təmir bərpa işləri.jpg" alt="PMD PROJECTS Zəfər Parkı" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">PMD PROJECTS - Zəfər Parkı</h3>
                <p class="project-description">Birqədə və təmir bərpa işlərinin görülməsi</p>
                <span class="project-category">Park İşləri</span>
            </div>
        </div>
        
        <div class="project-card" data-category="construction">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/port baku vlok  yanğin qapilarinin quraşdirilmasi.jpg" alt="Port Baku Yanğın Təhlükəsizliyi" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">Port Baku - Yanğın Təhlükəsizliyi</h3>
                <p class="project-description">Yanğın qapılarının quraşdırılması</p>
                <span class="project-category">Yanğın Təhlükəsizliyi</span>
            </div>
        </div>
        
        <div class="project-card" data-category="construction">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/SOCAR  petroleum  beton işləri.jpg" alt="SOCAR Petroleum" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">SOCAR Petroleum</h3>
                <p class="project-description">Beton işlərinin həyata keçirilməsi</p>
                <span class="project-category">Beton İşləri</span>
            </div>
        </div>
        
        <div class="project-card" data-category="infrastructure">
            <div class="project-image">
                <img src="img/Mirvari Sekiller/Sənayə və  mülki tikinti E-93 Yol işlərinin görülməsi.jpg" alt="Sənaye və Mülki Tikinti E-93" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">Sənaye və Mülki Tikinti E-93</h3>
                <p class="project-description">Yol işlərinin görülməsi</p>
                <span class="project-category">Yol Tikintisi</span>
            </div>
        </div>
        
        <div class="project-card" data-category="infrastructure">
            <div class="project-image">
                <img src='img/Mirvari Sekiller/"ECOLE LEGAL CENTRE"   Şirvan rayon ərazisində Torpaq işlərinin görülməsi.jpg' alt="ECOLE LEGAL CENTRE Torpaq İşləri" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">ECOLE LEGAL CENTRE - Torpaq İşləri</h3>
                <p class="project-description">Şirvan rayon ərazisində torpaq işlərinin görülməsi</p>
                <span class="project-category">Torpaq İşləri</span>
            </div>
        </div>
        
        <div class="project-card" data-category="renovation">
            <div class="project-image">
                <img src='img/Mirvari Sekiller/"ECOLE LEGAL CENTRE" Ofislərin təmir bərpa və yenidən qurma işləri.jpg' alt="ECOLE LEGAL CENTRE Ofis Təmiri" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">ECOLE LEGAL CENTRE - Ofis Təmiri</h3>
                <p class="project-description">Ofislərin təmir bərpa və yenidən qurma işləri</p>
                <span class="project-category">Təmir-Bərpa</span>
            </div>
        </div>
    `;
    
    // Insert the HTML
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsHTML;
        
        // Add loading animation
        setTimeout(() => {
            const cards = projectsGrid.querySelectorAll('.project-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 100);
    }
    
    // Simple filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.dataset.filter;
            
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.dataset.category === filterValue) {
                    card.style.display = 'block';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
