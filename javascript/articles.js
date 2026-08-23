/* ================= ARTICLE DATA =================
   Shared by news.html (listing), index.html (latest 3) and article.html (detail).
   Every article added here automatically appears as a card that opens its own
   detail page via article.html?id=N.

   Paragraph entries may be either a plain string (rendered safely as text)
   or an object { html: '...' } when inline markup such as <strong> is needed
   to preserve the editorial bold emphasis and bullet points of the story. */

/* HOW TO ADD YOUR NEXT ARTICLE:
   1. Put your image inside Assets (e.g. Assets/news/my-article.png).
   2. Copy the shape below into the array, fill in your content.

{
    id: N,                                       // unique number, increment for each new article
    filter: 'production',                        // 'production' | 'export' | 'company' | 'event'
    category: 'Your Label',                      // label shown on the card and above the title
    title: 'Your Article Title Here',
    date: 'August 22, 2026',
    readTime: '5 min read',
    image: 'Assets/news/my-article.png',         // cover image path
    intro: 'One or two sentences shown under the title as a preview.',
    sections: [
        {
            heading: 'First section heading',
            paragraphs: [
                'First paragraph of this section.',
                { html: '<strong>\u2022 Bullet lead-in:</strong> bullet text with <strong>bold</strong> parts.' }
            ]
        }
    ],
    conclusion: 'Closing paragraph of the article.'
},
*/

const articles = [
    {
        id: 1,
        filter: 'production',
        category: 'ARTICLES #1',
        title: 'Inside the Kiln: The Science Behind Long-Burning Shisha & BBQ Briquettes',
        date: 'August 22, 2026',
        readTime: '5 min read',
        image: '/Assets/news/Charcoal Briquette2.png',
        intro: 'Premium charcoal is engineered long before ignition. From carbonization temperatures above 600\u00B0C down to ultra-low ash targets, the science inside the kiln decides how long, how hot, and how clean your fuel burns.',
        sections: [
            {
                heading: 'The Science of Carbonization',
                paragraphs: [
                    { html: 'Premium charcoal is not just burnt wood. It goes through <strong>carbonization</strong>\u2014a process where raw materials are baked in an oxygen-starved kiln at extreme temperatures (<strong>600\u00B0C - 900\u00B0C+</strong>).' },
                    { html: 'This intense heat bakes away moisture and chemical impurities, leaving behind a dense block of <strong>nearly pure carbon</strong>. The higher the carbon content, the longer, hotter, and cleaner the briquette will burn.' }
                ]
            },
            {
                heading: 'The Shisha Standard: The "Zero" Rule',
                paragraphs: [
                    { html: '<strong>\u2022 Zero Odor &amp; Taste:</strong> High-heat carbonization removes all organic impurities that cause harsh, chemical smoke, protecting the flavor of the tobacco.' },
                    { html: '<strong>\u2022 Gentle, Stable Heat:</strong> The density of the coconut shell releases a steady heat that bakes the tobacco evenly for <strong>2+ hours</strong> without scorching it.' },
                    { html: '<strong>\u2022 Ultra-Low Ash (Under 2.5%):</strong> High ash blocks heat and forces staff to constantly flip the coals. Premium shisha coals leave a minimal ash layer that clings tightly to the briquette, keeping the bowl clean.' }
                ]
            },
            {
                heading: 'The BBQ Standard: Heat & Endurance',
                paragraphs: [
                    { html: 'Commercial pitmasters need fuel that survives high-volume airflow and heavy dripping grease. Ultra-dense hardwoods like <strong>Halaban, Tamarind, and Coffee Wood Binchotan</strong> are engineered specifically for this environment:' },
                    { html: '<strong>\u2022 Extreme Density:</strong> These woods naturally have tight grain structures. Once carbonized, they hold together and won\'t quickly turn to dust under heavy grill airflow.' },
                    { html: '<strong>\u2022 Sustained Infrared Heat:</strong> They act like thermal batteries, radiating intense heat (<strong>300\u00B0C+</strong>) to cook meats evenly for hours.' },
                    { html: '<strong>\u2022 Controlled Ash:</strong> Unlike shisha, a slight ash layer is actually beneficial here. It regulates heat, prevents sudden grease flare-ups, and adds a subtle, traditional smoky profile to the food.' }
                ]
            },
            {
                heading: 'Summary',
                paragraphs: [
                    'Not all charcoal is created equal, and evaluating a product by its shape or packaging is a recipe for operational failure.',
                    'Sourcing the right fuel requires looking under the hood\u2014asking suppliers directly about their carbonization temperatures, raw material origins, and fixed carbon percentages.',
                    'For a shisha lounge, investing in high-carbon, low-ash coconut briquettes translates directly to fewer coal changes, reduced labor costs, and a flawless, premium customer experience.',
                    'For a commercial kitchen, selecting specialized hardwood or Coffee wood Binchotan guarantees the relentless, even heat necessary to survive a fully booked dinner service.'
                ]
            }
        ],
        conclusion: 'In both arenas, the science inside the kiln dictates the success outside of it.'
    },
    {
        id: 2,
        filter: 'company',
        category: 'ARTICLES #2',
        title: 'Trusted Charcoal Supplier : A Guide for Global Buyers',
        date: 'August 22, 2026',
        readTime: '4 min read',
        image: '/Assets/news/hero4.png',
        intro: 'For charcoal importers around the world, choosing a reliable and responsible supplier is essential for long-term business success. Ecoco Nusantara has earned a strong reputation as a trusted partner by providing high-quality coconut shell briquettes and BBQ lump wood, professional service, and a strict commitment to sustainability.',
        sections: [
            {
                heading: 'Why Ecoco Nusantara Is a Trusted Supplier for Global Charcoal Importers?',
                paragraphs: [
                    'With deep expertise in the Indonesian charcoal industry, Ecoco Nusantara continues to be a preferred supplier for educated buyers across the globe.',
                    'The cornerstone of a responsible supplier lies in batch-to-batch consistency. Ecoco Nusantara implements rigorous quality control measures to guarantee optimal specifications for every shipment. From maximizing fixed carbon for extended burn times to ensuring minimal ash and moisture content, this precision in manufacturing eliminates the risks of product variability and fiercely protects the importer\'s brand reputation.',
                    'Navigating cross-border logistics requires more than just a superior product; it demands seamless execution. Ecoco Nusantara maintains meticulous oversight across the entire supply chain managing everything from raw material procurement to customized packaging, container staging, and export documentation. This streamlined operational handling ensures strict adherence to international shipping regulations, mitigating transit delays and guaranteeing that inventory arrives safely and on schedule.',
                    'Ethical procurement is a critical priority for today\u2019s conscientious global buyers. The company\'s production methodology is deeply rooted in sustainability, utilizing repurposed agricultural waste, such as natural coconut shells, alongside responsibly sourced biomass. By prioritizing eco-conscious manufacturing, Ecoco Nusantara empowers its partners to confidently meet the rising consumer demand for environmentally friendly products.'
                ]
            }
        ],
        conclusion: 'By aligning exceptional product performance with operational reliability and sustainable practices, Ecoco Nusantara transcends the traditional buyer-vendor relationship. The company remains dedicated to forging resilient, long-term alliances with global importers who refuse to compromise on quality, efficiency, and integrity.'
    }
];
