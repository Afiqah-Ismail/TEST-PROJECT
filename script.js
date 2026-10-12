/**
 * CHEMPAKA OLIVIA - PROFESSIONAL ACCOUNTING PORTFOLIO
 * Clean Client-Side Logic (No unnecessary bloat)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Theme Toggle (Corporate Light vs. Midnight Dark)
  // ==========================================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('chempaka_corp_theme') || 'light';
  document.body.setAttribute('data-theme', savedTheme);

  const updateThemeButton = (theme) => {
    if (!themeToggleBtn) return;
    const icon = themeToggleBtn.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fa-solid fa-sun';
      themeToggleBtn.setAttribute('title', 'Switch to Clean Light Mode');
    } else {
      icon.className = 'fa-solid fa-moon';
      themeToggleBtn.setAttribute('title', 'Switch to Midnight Dark Mode');
    }
  };
  updateThemeButton(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const active = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', active);
      localStorage.setItem('chempaka_corp_theme', active);
      updateThemeButton(active);
    });
  }

  // ==========================================================================
  // 2. Skills Filtering
  // ==========================================================================
  const filterTabs = document.querySelectorAll('.filter-tab');
  const skillCards = document.querySelectorAll('.skill-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterVal = tab.getAttribute('data-filter');
      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ==========================================================================
  // 3. Case Studies Brief Modal Engine
  // ==========================================================================
  const caseBriefs = {
    "1": {
      title: "Comparative Solvency & Performance Analysis: Nestlé (M) Berhad vs. Dutch Lady Milk Industries",
      content: `
        <div class="case-section">
          <h4><i class="fa-solid fa-bullseye"></i> Engagement Objective</h4>
          <p>
            Perform a rigorous three-year audited financial statement evaluation comparing two premier FMCG market leaders listed on Bursa Malaysia Main Market. Assess liquidity resilience, debt solvency, cash conversion cycles, and MFRS presentation disclosures.
          </p>
        </div>
        <div class="case-section">
          <h4><i class="fa-solid fa-microscope"></i> Methodology & Technical Analysis</h4>
          <ul>
            <li><strong>DuPont 5-Factor ROE Breakdown:</strong> Analyzed Net Profit Margin, Asset Turnover, Financial Leverage, Tax Burden, and Interest Burden to uncover the operational drivers of shareholder returns.</li>
            <li><strong>MFRS 16 Leases Capitalization:</strong> Calculated the adjustment of operating leases into Right-of-Use (ROU) assets and corresponding lease liabilities, analyzing effects on net gearing and interest coverage.</li>
            <li><strong>Working Capital Cash Cycles:</strong> Computed Days Sales Outstanding (DSO), Days Inventory Outstanding (DIO), and Days Payables Outstanding (DPO), evaluating supplier credit dependency versus cash collections.</li>
            <li><strong>MFRS 115 Revenue Scrutiny:</strong> Examined trade rebates, volume discounts, and variable consideration disclosures in notes to the financial accounts.</li>
          </ul>
        </div>
        <div class="case-section">
          <h4><i class="fa-solid fa-chart-line"></i> Analytical Takeaways</h4>
          <p>
            Constructed an interactive Excel model with dynamic sensitivity toggles testing profit margin compression against inflation and currency exchange movements. Awarded Grade A+ Distinction by UiTM Faculty of Accountancy.
          </p>
        </div>
      `
    },
    "2": {
      title: "Corporate Tax Computation & Capital Allowance Schedule (SME Manufacturer)",
      content: `
        <div class="case-section">
          <h4><i class="fa-solid fa-bullseye"></i> Engagement Objective</h4>
          <p>
            Prepare a complete statutory Form C corporate tax return package for a resident manufacturing company with RM8.5M annual revenue, reconciling accounting net profit to statutory chargeable income under the Malaysian Income Tax Act 1967.
          </p>
        </div>
        <div class="case-section">
          <h4><i class="fa-solid fa-microscope"></i> Methodology & Technical Adjustments</h4>
          <ul>
            <li><strong>Section 39 Non-Allowable Deductions:</strong> Reconciled disallowed expenditures including non-business entertainment, private vehicle upkeep, depreciation add-backs, and non-approved donations.</li>
            <li><strong>Schedule 3 Capital Allowances:</strong> Categorized qualifying plant & machinery, heavy industrial equipment, and office computers; applied statutory Initial Allowances (20%) and Annual Allowances (14% / 20%).</li>
            <li><strong>Balancing Calculations:</strong> Calculated balancing charges and allowances on retired equipment against tax written down value (TWDV).</li>
            <li><strong>SME Tiered Tax Rates:</strong> Computed progressive corporate tax tiers (15% on first RM150k, 17% on next RM450k, and 24% on remaining chargeable income).</li>
          </ul>
        </div>
        <div class="case-section">
          <h4><i class="fa-solid fa-award"></i> Practical Output</h4>
          <p>
            Delivered an automated tax working schedule with built-in validation checks, reconciliation summaries, and cross-references to LHDNM Public Rulings. Awarded Grade A Distinction.
          </p>
        </div>
      `
    },
    "3": {
      title: "Audit Risk Assessment & Procure-to-Pay Internal Control Matrix",
      content: `
        <div class="case-section">
          <h4><i class="fa-solid fa-bullseye"></i> Engagement Objective</h4>
          <p>
            Simulate the interim audit phase of an enterprise trading client. Map the complete procurement-to-pay (P2P) transaction flow, detect internal control deficiencies, and formulate defensible audit test procedures in line with International Standards on Auditing (ISA).
          </p>
        </div>
        <div class="case-section">
          <h4><i class="fa-solid fa-microscope"></i> Technical Audit Procedures</h4>
          <ul>
            <li><strong>ISA 315 Risk Assessment:</strong> Walked through purchase requisitions, supplier master approvals, PO authorization matrices, goods receipt notes (GRN), and electronic fund transfers.</li>
            <li><strong>Risk and Control Matrix (RCM):</strong> Mapped 18 operational risks to preventative and detective controls; identified lack of segregation of duties in vendor master record additions.</li>
            <li><strong>Test of Controls (TOC) & Substantive Testing:</strong> Formulated audit sampling plans for 3-way voucher matching and cut-off testing around balance sheet date accounts payable.</li>
            <li><strong>Audit Management Letter:</strong> Drafted formal audit recommendations ranking control deficiencies by severity and recommending governance safeguards.</li>
          </ul>
        </div>
        <div class="case-section">
          <h4><i class="fa-solid fa-check-double"></i> Practical Outcome</h4>
          <p>
            Produced an engagement-ready audit working paper file adhering to professional documentation standards expected in public accounting practices. Awarded Grade A Distinction.
          </p>
        </div>
      `
    },
    "4": {
      title: "ESG Disclosure Evaluation & Sustainability Assurance (Bursa Malaysia Top 30)",
      content: `
        <div class="case-section">
          <h4><i class="fa-solid fa-bullseye"></i> Engagement Objective</h4>
          <p>
            Evaluate corporate sustainability reporting among Bursa Malaysia Main Market listed conglomerates following Bursa Malaysia’s Enhanced Sustainability Reporting Framework and Global Reporting Initiative (GRI) standards.
          </p>
        </div>
        <div class="case-section">
          <h4><i class="fa-solid fa-microscope"></i> Methodology & Procedures</h4>
          <ul>
            <li><strong>Emissions Scope 1–3 Benchmarking:</strong> Assessed transparency of greenhouse gas emissions reporting across 10 listed conglomerates.</li>
            <li><strong>Assurance Verification:</strong> Evaluated the presence and depth of limited assurance statements issued by Big 4 auditors on ESG metrics versus self-declared indicators.</li>
            <li><strong>Interactive Visual Dashboard:</strong> Built a Microsoft Power BI dashboard visualizing board gender diversity, carbon intensity per revenue ringgit, and sustainability KPI achievements.</li>
          </ul>
        </div>
        <div class="case-section">
          <h4><i class="fa-solid fa-trophy"></i> Competition Recognition</h4>
          <p>
            Top 10 Finalist in the Inter-Varsity Accounting Challenge, commended by audit judging partners for rigorous governance analysis.
          </p>
        </div>
      `
    }
  };

  const caseModal = document.getElementById('caseModal');
  const closeCaseBtn = document.getElementById('closeCaseBtn');
  const closeCaseFooterBtn = document.getElementById('closeCaseFooterBtn');
  const caseModalTitle = document.getElementById('caseModalTitle');
  const caseModalBody = document.getElementById('caseModalBody');

  document.querySelectorAll('.view-case-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = btn.getAttribute('data-case');
      const brief = caseBriefs[caseId];
      if (brief && caseModal) {
        caseModalTitle.textContent = brief.title;
        caseModalBody.innerHTML = brief.content;
        caseModal.classList.add('active');
      }
    });
  });

  const closeCaseModal = () => {
    if (caseModal) caseModal.classList.remove('active');
  };

  if (closeCaseBtn) closeCaseBtn.addEventListener('click', closeCaseModal);
  if (closeCaseFooterBtn) closeCaseFooterBtn.addEventListener('click', closeCaseModal);
  if (caseModal) {
    caseModal.addEventListener('click', (e) => {
      if (e.target === caseModal) closeCaseModal();
    });
  }

  // ==========================================================================
  // 4. Executive Resume Modal & Print Engine
  // ==========================================================================
  const resumeModal = document.getElementById('resumeModal');
  const openResumeBtn = document.getElementById('openResumeBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');
  const closeResumeBtn = document.getElementById('closeResumeBtn');
  const printCvBtn = document.getElementById('printCvBtn');

  const openResume = () => {
    if (resumeModal) resumeModal.classList.add('active');
  };

  const closeResume = () => {
    if (resumeModal) resumeModal.classList.remove('active');
  };

  if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
  if (heroResumeBtn) heroResumeBtn.addEventListener('click', openResume);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResume);
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResume();
    });
  }

  if (printCvBtn) {
    printCvBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // ==========================================================================
  // 5. Contact Form Simulation
  // ==========================================================================
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('senderName').value.trim();
      const email = document.getElementById('senderEmail').value.trim();
      const company = document.getElementById('senderCompany').value.trim();
      const practice = document.getElementById('targetPractice').value;

      if (formStatus) {
        formStatus.className = 'form-alert success';
        formStatus.innerHTML = `
          <strong><i class="fa-solid fa-circle-check"></i> Thank you, ${name}!</strong><br>
          Your inquiry regarding <strong>${practice}</strong> at <strong>${company}</strong> has been submitted. Chempaka Olivia will respond directly to <code>${email}</code> within 24 hours.
        `;
        formStatus.classList.remove('hidden');
      }

      contactForm.reset();
      showToast('Interview inquiry sent successfully!', 'fa-solid fa-check');

      setTimeout(() => {
        if (formStatus) formStatus.classList.add('hidden');
      }, 8000);
    });
  }

  // ==========================================================================
  // 6. Copy to Clipboard Action
  // ==========================================================================
  document.querySelectorAll('.copy-action-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy');
      if (val) {
        navigator.clipboard.writeText(val).then(() => {
          showToast(`Copied to clipboard: ${val}`, 'fa-regular fa-copy');
        }).catch(() => {
          showToast('Failed to copy. Please copy manually.', 'fa-solid fa-xmark');
        });
      }
    });
  });

  // ==========================================================================
  // 7. Mobile Navigation Toggle
  // ==========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // ==========================================================================
  // 8. Clean Notification Toast
  // ==========================================================================
  function showToast(msg, icon = 'fa-solid fa-info-circle') {
    const box = document.getElementById('toastBox');
    if (!box) return;

    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    toast.innerHTML = `<i class="${icon}"></i><span>${msg}</span>`;

    box.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 3500);
  }

  // Current year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
