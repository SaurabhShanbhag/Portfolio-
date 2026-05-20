import Image from 'next/image';
import Link from 'next/link';
import { CaseStudyHero } from '@/components/CaseStudyHero';
import { CaseStudySection } from '@/components/CaseStudySection';
import { ToolsSkillsGrid } from '@/components/ToolsSkillsGrid';
import { publicFile } from '@/lib/siteBasePath';

export const metadata = {
  title: 'Amazon Marketplace Optimization - Case Study | Saurabh Shanbhag',
  description:
    'Real-time e-commerce optimization project focused on improving product visibility, conversion rate, and sales performance on Amazon.',
};

export default function AmazonProjectPage() {
  return (
    <>
      {/* Hero Section */}
      <CaseStudyHero
        title="Impact of Data-Driven Keyword Optimization and Listing Enhancements on Organic Visibility, Conversion Rate, and Sales Performance of Amazon Products"
        description="A real-time e-commerce optimization project focused on improving product visibility, conversion rate, and sales performance on Amazon using keyword research, advertising optimization, listing enhancement, and data-driven analysis."
        meta={[
          { label: 'Company', value: 'Arvind Industries' },
          { label: 'Brands', value: 'Embassy & Trisara' },
          { label: 'Duration', value: 'Jan – Apr 2026' },
          { label: 'Role', value: 'Marketing and Operations Intern' },
        ]}
      />

      {/* About the Company */}
      <CaseStudySection
        title="About Arvind Industries"
        subtitle="The Client"
        variant="light"
      >
        <p className="font-body text-base text-ink2 leading-relaxed mb-6">
          Arvind Industries is a premium kitchenware manufacturer with more than 40 years of experience in cookware, serve ware, and household essentials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="border border-border rounded-xl p-6 bg-surface">
            <h4 className="font-display text-base text-accent mb-2">
              Brands Portfolio
            </h4>
            <ul className="space-y-2 font-body text-sm text-ink2">
              <li>• Embassy Kitchenware (Premium)</li>
              <li>• Trisara (Value segment)</li>
            </ul>
          </div>

          <div className="border border-border rounded-xl p-6 bg-surface">
            <h4 className="font-display text-base text-accent mb-2">
              Market Presence
            </h4>
            <ul className="space-y-2 font-body text-sm text-ink2">
              <li>• Amazon & D2C websites</li>
              <li>• Quick commerce & offline retail</li>
              <li>• Pan-India operations</li>
            </ul>
          </div>

          <div className="border border-border rounded-xl p-6 bg-surface">
            <h4 className="font-display text-base text-accent mb-2">
              Scale
            </h4>
            <ul className="space-y-2 font-body text-sm text-ink2">
              <li>• 2000+ SKUs</li>
              <li>• 170+ ASIN analyzed</li>
              <li>• Multi-brand operations</li>
            </ul>
          </div>
        </div>
      </CaseStudySection>

      {/* Problem Statement */}
      <CaseStudySection
        title="Problem Statement"
        subtitle="The Challenge"
        variant="dark"
      >
        <p className="font-body text-base text-ink2 leading-relaxed mb-6">
          Amazon is a highly competitive marketplace where many products struggle to gain visibility and generate sales despite advertising efforts. Arvind Industries faced this challenge with their extensive product portfolio.
        </p>

        <p className="font-body text-base text-ink2 leading-relaxed mb-6">
          The project focused on answering critical business questions:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/10">
                <span className="text-accent text-sm font-bold">?</span>
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm text-ink mb-1">
                Keyword Performance
              </h4>
              <p className="font-body text-sm text-ink2">
                Which keywords drive sales and customer engagement?
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/10">
                <span className="text-accent text-sm font-bold">?</span>
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm text-ink mb-1">
                Advertising Impact
              </h4>
              <p className="font-body text-sm text-ink2">
                How do ads and metrics affect overall sales performance?
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/10">
                <span className="text-accent text-sm font-bold">?</span>
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm text-ink mb-1">
                Listing Quality
              </h4>
              <p className="font-body text-sm text-ink2">
                How does listing quality affect conversion rates?
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/10">
                <span className="text-accent text-sm font-bold">?</span>
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm text-ink mb-1">
                Product Performance
              </h4>
              <p className="font-body text-sm text-ink2">
                Which campaigns and products perform best?
              </p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Objectives */}
      <CaseStudySection
        title="Project Objectives"
        subtitle="Goals & Success Metrics"
        variant="light"
      >
        <div className="space-y-4">
          <div className="flex gap-4 pb-4 border-b border-border">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold text-sm">
                1
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-ink mb-1">
                Keyword Optimization Impact
              </h4>
              <p className="font-body text-sm text-ink2">
                Analyze the impact of keyword optimization on visibility and conversion rates
              </p>
            </div>
          </div>

          <div className="flex gap-4 pb-4 border-b border-border">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold text-sm">
                2
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-ink mb-1">
                Advertising Evaluation
              </h4>
              <p className="font-body text-sm text-ink2">
                Evaluate the effect of advertising metrics on sales performance
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent text-white font-bold text-sm">
                3
              </div>
            </div>
            <div>
              <h4 className="font-display text-base text-ink mb-1">
                Listing Enhancement Impact
              </h4>
              <p className="font-body text-sm text-ink2">
                Study the impact of listing enhancements on customer engagement and sales
              </p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Work Done */}
      <CaseStudySection
        title="Work Done"
        subtitle="Methodology & Execution"
        variant="dark"
      >
        <div className="space-y-8">
          {/* Keyword Research */}
          <div>
            <h3 className="font-display text-lg text-accent mb-4">
              1. Keyword Research & Competitor Analysis
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Identified competitor ASINs manually and using Helium 10</span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Used Cerebro and Magnet tools for keyword extraction and analysis
                </span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Categorized keywords into Exact, Phrase, and Broad match types
                </span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Added localized and misspelled keyword variations</span>
              </li>
            </ul>
          </div>

          {/* Listing Optimization */}
          <div>
            <h3 className="font-display text-lg text-accent mb-4">
              2. Listing Optimization
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Optimized titles, bullet points, and product descriptions</span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Added keyword-rich content using Amazon Listing Builder</span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Created A+ content for selected high-performing products</span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Designed lifestyle and infographic images for visual appeal
                </span>
              </li>
            </ul>
          </div>

          {/* Advertising Optimization */}
          <div>
            <h3 className="font-display text-lg text-accent mb-4">
              3. Advertising Optimization
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Created and optimized Sponsored Product campaigns</span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Analyzed search term and campaign performance reports</span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Removed low-performing keywords and optimized bids</span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Allocated budgets based on keyword and campaign performance</span>
              </li>
            </ul>
          </div>

          {/* Data Analysis */}
          <div>
            <h3 className="font-display text-lg text-accent mb-4">
              4. Data Preparation & Analysis
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Created structured dataset for 170+ ASINs</span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Used Microsoft Excel for pivot analysis and visualization</span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>
                  Conducted correlation and regression analysis using JMP
                </span>
              </li>
              <li className="flex gap-3 font-body text-sm text-ink2">
                <span className="text-accent mt-1">→</span>
                <span>Generated insights and statistical models for decision-making</span>
              </li>
            </ul>
          </div>
        </div>
      </CaseStudySection>

      {/* A+ Content & Product Image Optimization */}
      <CaseStudySection
        title="A+ Content & Product Image Optimization"
        subtitle="Visual Merchandising & Creative Assets"
        variant="dark"
      >
        <p className="font-body text-base text-ink2 leading-relaxed mb-12">
          Created optimized Amazon A+ content and premium product image assets to improve customer engagement, product storytelling, and conversion performance. The work focused on enhancing visual communication, feature presentation, and overall shopping experience for Embassy Kitchenware products.
        </p>

        <div className="space-y-12">
          {/* First Showcase Block */}
          <div>
            <h3 className="font-display text-lg text-accent mb-4">
              Amazon A+ Content Design
            </h3>
            <p className="font-body text-base text-ink2 leading-relaxed mb-6">
              Designed premium A+ content for the Embassy Touchstone Dosa Tawa featuring lifestyle visuals, product benefits, feature highlights, dimensional graphics, and cooking-use storytelling to improve customer confidence and engagement.
            </p>
            <div className="bg-white border border-border rounded-2xl p-6 overflow-hidden">
              <Image
                src={publicFile("/projects/amazon-project/Aplus.jpg")}
                alt="Amazon A+ Content Design"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Second Showcase Block */}
          <div>
            <h3 className="font-display text-lg text-accent mb-4">
              Interactive Product Image Optimization
            </h3>
            <p className="font-body text-base text-ink2 leading-relaxed mb-6">
              Created optimized Amazon product images with clean presentation, lifestyle context, premium visual styling, and marketplace-focused composition to enhance click-through rate and product visibility.
            </p>
            <div className="bg-white border border-border rounded-2xl p-6 overflow-hidden">
              <Image
                src={publicFile("/projects/amazon-project/productimage.jpg")}
                alt="Interactive Product Image Optimization"
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* External Link */}
          <div className="pt-4 border-t border-border">
            <a
              href="https://www.amazon.in/Embassy-Touchstone-Pre-Seasoned-Vegetable-Compatible/dp/B0FY2B4H6X"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:gap-3 transition-all"
            >
              View Product on Amazon
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7m10 0v10" />
              </svg>
            </a>
          </div>
        </div>
      </CaseStudySection>

      {/* Data Analysis & Insights */}
      <CaseStudySection
        title="Data Analysis & Insights"
        subtitle="Key Findings"
        variant="light"
      >
        <p className="font-body text-base text-ink2 leading-relaxed mb-8">
          Comprehensive analysis across multiple dimensions of the Amazon marketplace optimization project:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: ROAS */}
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h4 className="font-display text-base text-accent mb-3">
              ROAS Performance
            </h4>
            <p className="font-body text-sm text-ink2 mb-4">
              Return on Ad Spend improved progressively during optimization phases, increasing from 18% to 20% after campaign and listing enhancements.
            </p>
            {/* Graph Image */}
            <div className="bg-white border border-border rounded-xl p-4 flex items-center justify-center">
              <Image
                src={publicFile("/projects/amazon-project/ROAS.jpg")}
                alt="ROAS Performance Graph"
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Card 2: Sales */}
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h4 className="font-display text-base text-accent mb-3">
              Sales Growth Analysis
            </h4>
            <p className="font-body text-sm text-ink2 mb-4">
              14-day sales performance showed overall growth trends after keyword optimization and campaign refinement across multiple ASINs.
            </p>
            {/* Graph Image */}
            <div className="bg-white border border-border rounded-xl p-4 flex items-center justify-center">
              <Image
                src={publicFile("/projects/amazon-project/sales.jpg")}
                alt="Sales Growth Analysis Graph"
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Card 3: Conversion */}
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h4 className="font-display text-base text-accent mb-3">
              Conversion Rate Insights
            </h4>
            <p className="font-body text-sm text-ink2 mb-4">
              Broad match keywords delivered the highest conversion rate, highlighting the importance of optimized targeting strategies.
            </p>
            {/* Graph Image */}
            <div className="bg-white border border-border rounded-xl p-4 flex items-center justify-center">
              <Image
                src={publicFile("/projects/amazon-project/Conversion.jpg")}
                alt="Conversion Rate Insights Graph"
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Card 4: New Purchase */}
          <div className="bg-surface border border-border rounded-2xl p-6">
            <h4 className="font-display text-base text-accent mb-3">
              New Customer Purchases
            </h4>
            <p className="font-body text-sm text-ink2 mb-4">
              New-to-brand purchases increased significantly during campaign optimization phases, showing improved customer acquisition performance.
            </p>
            {/* Graph Image */}
            <div className="bg-white border border-border rounded-xl p-4 flex items-center justify-center">
              <Image
                src={publicFile("/projects/amazon-project/new purchase.jpg")}
                alt="New Customer Purchases Graph"
                width={400}
                height={300}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Regression Analysis */}
      <CaseStudySection
        title="Regression Analysis"
        subtitle="Statistical Models & Insights"
        variant="dark"
      >
        <p className="font-body text-base text-ink2 leading-relaxed mb-8">
          Statistical regression models were developed to understand the relationships between marketing variables and sales performance:
        </p>

        <div className="space-y-8">
          {/* Model 1 */}
          <div className="border border-border rounded-2xl p-8 bg-white">
            <h3 className="font-display text-lg text-accent mb-4">Model 1: Simple Regression</h3>

            <div className="bg-surface rounded-lg p-6 mb-6 font-mono text-sm">
              <p className="text-ink">
                Sales = 2961.48 + (24.72 × Clicks) − (0.16 × Impressions)
              </p>
            </div>

            <div>
              <h4 className="font-display text-base text-ink mb-3">Key Insight</h4>
              <p className="font-body text-sm text-ink2 leading-relaxed">
                This model reveals that <span className="text-accent font-medium">clicks have a strong positive impact on sales</span>, with each additional click generating approximately ₹24.72 in sales. Conversely, impressions alone showed a slight negative coefficient, suggesting that impressions without clicks may indicate ineffective ad targeting or low relevance.
              </p>
            </div>
          </div>

          {/* Model 2 */}
          <div className="border border-border rounded-2xl p-8 bg-white">
            <h3 className="font-display text-lg text-accent mb-4">
              Model 2: Interaction Regression (Advanced)
            </h3>

            <div className="bg-surface rounded-lg p-6 mb-6 font-mono text-sm leading-relaxed">
              <p className="text-ink">
                Sales = 17.27×Clicks + 0.137×Impressions − 10.41×Spend
              </p>
              <p className="text-ink">
                + 239.10×(Spend×Conversion Rate)
              </p>
              <p className="text-ink">
                − 0.00379×(Spend×Clicks)
              </p>
            </div>

            <div>
              <h4 className="font-display text-base text-ink mb-3">Model Performance</h4>
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <p className="font-display text-2xl text-accent font-bold">
                    R² = 0.90
                  </p>
                  <p className="font-body text-xs text-ink3 mt-1">
                    Explains 90% of sales variance
                  </p>
                </div>
              </div>

              <h4 className="font-display text-base text-ink mb-3">Key Insight</h4>
              <p className="font-body text-sm text-ink2 leading-relaxed">
                The interaction term <span className="text-accent font-medium">(Spend × Conversion Rate)</span> with a coefficient of 239.10 is the strongest predictor of sales, demonstrating that{' '}
                <span className="font-medium">
                  conversion-focused advertising spending yields substantially better results
                </span>
                . This model suggests that optimizing for conversion rate while strategically allocating budget is more effective than simply increasing ad spend.
              </p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Key Findings */}
      <CaseStudySection
        title="Key Findings"
        subtitle="Strategic Insights"
        variant="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Keyword Concentration',
              description:
                'A small number of keywords (20%) generated the majority of sales (80% Pareto principle)',
            },
            {
              title: 'Click Effectiveness',
              description:
                'Clicks had significantly stronger impact on sales than impressions alone',
            },
            {
              title: 'Match Type Performance',
              description:
                'Broad and Phrase match keywords outperformed Exact match in driving volume',
            },
            {
              title: 'ROAS Improvement',
              description:
                'Overall Return on Ad Spend improved from 18% to 20% after optimization',
            },
            {
              title: 'Content Engagement',
              description:
                'A+ content enhanced customer engagement and improved conversion rates',
            },
            {
              title: 'Conversion-Focused Spend',
              description:
                'Budgets allocated to high-conversion keywords yielded better ROI',
            },
          ].map((finding, idx) => (
            <div
              key={idx}
              className="border border-border rounded-xl p-6 bg-surface hover:border-accent transition-colors"
            >
              <h4 className="font-display text-base text-accent mb-2">
                {finding.title}
              </h4>
              <p className="font-body text-sm text-ink2">
                {finding.description}
              </p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Skills & Tools */}
      <CaseStudySection
        title="Skills & Tools"
        subtitle="Technical & Professional Development"
        variant="dark"
      >
        <ToolsSkillsGrid
          skills={[
            'Digital Marketing',
            'Marketplace Optimization',
            'Data Analysis',
            'Campaign Optimization',
            'Consumer Insights',
            'Brand Positioning',
            'Statistical Analysis',
            'Performance Marketing',
          ]}
          tools={['Amazon Ads', 'Helium 10', 'Microsoft Excel', 'JMP', 'Cerebro', 'Magnet']}
        />
      </CaseStudySection>

      {/* Outcome & Results */}
      <CaseStudySection
        title="Project Outcome"
        subtitle="Results & Impact"
        variant="light"
      >
        <p className="font-body text-base text-ink2 leading-relaxed mb-8">
          The project successfully demonstrated the power of data-driven e-commerce optimization in a competitive marketplace environment:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="border-l-4 border-accent bg-accent/5 p-6 rounded-r-xl">
            <p className="font-display text-3xl text-accent font-bold mb-2">
              18% → 20%
            </p>
            <p className="font-body text-sm text-ink2">
              Improved Return on Ad Spend (ROAS)
            </p>
          </div>

          <div className="border-l-4 border-accent bg-accent/5 p-6 rounded-r-xl">
            <p className="font-display text-3xl text-accent font-bold mb-2">
              ₹2.11L → ₹2.90L
            </p>
            <p className="font-body text-sm text-ink2">
              Sales increase from optimization
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-accent mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-body text-base text-ink2">
                Identified high-performing keywords and campaigns for strategic focus
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-accent mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-body text-base text-ink2">
                Enhanced conversion rates through optimized listings and A+ content
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-accent mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-body text-base text-ink2">
                Provided actionable insights for ongoing marketplace strategy
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <svg
                className="w-6 h-6 text-accent mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-body text-base text-ink2">
                Developed scalable optimization framework for 170+ products
              </p>
            </div>
          </div>
        </div>
      </CaseStudySection>

      {/* Conclusion */}
      <CaseStudySection
        title="Conclusion"
        subtitle="Final Thoughts"
        variant="dark"
      >
        <p className="font-body text-base text-ink2 leading-relaxed mb-6">
          This internship project demonstrates how data-driven optimization can significantly improve product visibility, customer engagement, and sales performance on Amazon. The comprehensive analysis revealed that success in e-commerce depends on a balanced approach combining:
        </p>

        <div className="bg-white border border-border rounded-2xl p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🔍</div>
              <h4 className="font-display text-base text-ink mb-2">
                Keyword Strategy
              </h4>
              <p className="font-body text-sm text-ink2">
                Targeted keyword selection and optimization
              </p>
            </div>

            <div className="text-center">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-display text-base text-ink mb-2">
                Data-Driven Decisions
              </h4>
              <p className="font-body text-sm text-ink2">
                Continuous monitoring and analytics
              </p>
            </div>

            <div className="text-center">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="font-display text-base text-ink mb-2">
                Continuous Improvement
              </h4>
              <p className="font-body text-sm text-ink2">
                Iterative optimization and testing
              </p>
            </div>
          </div>
        </div>

        <p className="font-body text-base text-ink2 leading-relaxed">
          In a competitive e-commerce environment like Amazon, businesses that leverage data analytics, optimize for conversion, and continuously iterate on their strategy will achieve better visibility, higher conversion rates, and improved sales performance. This project provided valuable practical experience in digital marketing, analytics, advertising optimization, and marketplace strategy that will be instrumental in future e-commerce ventures.
        </p>
      </CaseStudySection>

      {/* Back to Home */}
      <section className="bg-white py-12 md:py-16 border-t border-border">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}
