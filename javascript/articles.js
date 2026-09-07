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
        category: 'Production',
        title: 'Inside the Kiln: The Science Behind Long-Burning Shisha & BBQ Briquettes',
        date: 'August 22, 2026',
        readTime: '5 min read',
        image: '/Assets/news/article2.webp',
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
        category: 'Company',
        title: 'Trusted Charcoal Supplier : A Guide for Global Buyers',
        date: 'August 22, 2026',
        readTime: '4 min read',
        image: '/Assets/news/article1.webp',
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
    },
    {
        id: 3,
        filter: 'production',
        category: 'Production',
        title: 'Hexagonal vs. Cube vs. Flat\nChoosing the Right Briquette Shape for Your Market',
        date: 'August 23, 2026',
        readTime: '4 min read',
        image: '/Assets/barbeque/bbq-hexagonal-briquette.jpg.jpeg',
        intro: 'When sourcing premium charcoal briquettes for global distribution, importers often focus heavily on raw materials and chemical specifications such as fixed carbon and ash content.',
        sections: [
            {
                heading: '',
                paragraphs: [
                    { html: 'When sourcing premium charcoal briquettes for global distribution, importers often focus heavily on raw materials and chemical specifications such as fixed carbon and ash content. However, the physical geometry of the briquette is equally critical to its overall performance. <strong>The shape of the charcoal dictates airflow dynamics, heat distribution, and ignition speed, making certain profiles inherently better suited for specific applications.</strong> Understanding the functional differences between hexagonal, cube, and flat briquettes allows wholesale buyers to align their inventory with the exact needs of their target demographic.' },
                    { html: '<strong>Cube briquettes</strong> are the undisputed standard for the international shisha and hookah industry. Their uniform, flat sides provide maximum surface area contact when placed on hookah foil or heat management devices, ensuring an even and consistent transfer of heat to the shisha tobacco. Because they are densely compressed into precise dimensions, cubes offer an exceptionally long, stable, and predictable burn time. Furthermore, the geometric stability of a cube prevents it from rolling during use, which enhances safety and ash retention, making it the preferred choice for premium lounges and dedicated hookah enthusiasts.' },
                    { html: '<strong>Hexagonal briquettes</strong> are engineered primarily for heavy-duty grilling, professional barbecue, and commercial kitchen applications. Many hexagonal profiles are manufactured with a hollow center core, which creates a unique chimney effect that maximizes internal airflow through the briquette. This specialized aerodynamic design promotes a hotter, more efficient burn and allows the charcoal to reach peak culinary temperatures rapidly. The elongated, angular shape is perfect for stacking in kamado grills or large smokers, providing a steady, long-lasting heat source that handles thick cuts of meat with ease.' },
                    { html: '<strong>Flat or pillow-shaped briquettes</strong> are designed for convenience, fast ignition, and direct high-heat grilling. Their curved, broad surfaces allow for maximum oxygen exposure across the exterior, meaning they light much faster than denser, flat-sided geometric shapes. This makes them highly attractive to the casual consumer market, where backyard grillers prioritize speed and ease of use over marathon burn times. While they may not last as long as a tightly compressed cube or a dense hexagonal log, flat briquettes deliver a powerful, immediate sear that is ideal for burgers, thin steaks, and quick cooking sessions.' }
                ]
            },
            {
                heading: 'What kind of shape works best in your market?',
                paragraphs: []
            }
        ],
        conclusion: 'Selecting the right briquette shape comes down to matching the physical properties of the charcoal with the intended end-use of your consumers. Cube briquettes deliver the structural stability and slow, even heat required for premium shisha sessions. Hexagonal briquettes provide superior airflow and intense, prolonged heat for professional barbecue and smoking applications. Meanwhile, flat or pillow briquettes offer quick ignition and immediate high heat for casual, everyday grilling. By understanding these airflow and heat dynamics, importers can strategically tailor their product offerings to perfectly satisfy the demands of their specific markets.'
    },
    {
        id: 4,
        filter: 'export',
        category: 'Export',
        title: 'From Waste to Warmth: The Eco-Friendly Journey of Indonesian Coconut Shell Briquettes',
        date: 'August 23, 2026',
        readTime: '4 min read',
        image: '/Assets/manufacturing/manufacturing1.png',
        intro: 'The global push for sustainability has fundamentally shifted how industries and consumers evaluate their energy sources.',
        sections: [
            {
                heading: '',
                paragraphs: [
                    'The global push for sustainability has fundamentally shifted how industries and consumers evaluate their energy sources. In the charcoal and barbecue sector, the demand for eco-friendly alternatives to traditional timber-based fuels has never been higher. Indonesia, as one of the world\'s leading agricultural producers, plays a pivotal role in this green energy movement by transforming a forgotten byproduct into a high-performance fuel source. Through innovative upcycling, coconut shell briquettes have emerged as a premier, environmentally responsible solution that simultaneously combats agricultural waste and halts deforestation.',
                    'Traditionally, coconut shells were treated as agricultural refuse. In many rural processing regions, massive quantities of discarded shells were left to decompose or disposed of through open burning. This open-air combustion releases significant amounts of carbon dioxide and methane directly into the atmosphere, creating localized air pollution and contributing to greenhouse gas emissions. By systematically collecting these discarded shells from local copra and coconut oil industries, manufacturers channel a waste stream into a valuable, carbon-neutral resource, preventing unnecessary environmental degradation at the source.',
                    'The manufacturing process further amplifies this eco-friendly lifecycle. Once collected, the shells undergo a controlled carbonization process, converting organic biomass into dense, high-purity char without the use of chemical accelerators or synthetic binders. The resulting material is crushed, mixed with natural binding agents derived from cassava starch, and hydraulically compressed into uniform briquettes. This clean production cycle yields a product with exceptionally high fixed carbon and minimal ash, proving that ecological sustainability and elite product performance can go hand in hand.'
                ]
            },
            {
                heading: 'What are the competitive advantages of Indonesian coconut products in the international market?',
                paragraphs: [
                    'As one of the world\'s largest coconut-producing nations, Indonesia provides a continuous supply of naturally dense tropical coconut shells which yield exceptional hardness, high calorific value, and remarkably long burning times. This raw material superiority results in briquettes with high fixed carbon levels exceeding 80% for intense heat, minimal ash content under 3% to prevent clogged airflow, and an odorless, smokeless burn that preserves the pure taste of shisha tobacco and food. Furthermore, decades of industry maturation have given local factories advanced technical expertise in hydraulic compression and moisture control to deliver uniform shapes with low breakage rates. Combined with eco-friendly agricultural upcycling that requires zero tree cutting and a robust export infrastructure experienced in international logistics, Indonesian coconut charcoal offers global buyers unmatched reliability and sustainability.'
                ]
            }
        ],
        conclusion: ''
    },
    {
        id: 5,
        filter: 'production',
        category: 'Production',
        title: 'The Truth About Binders: Natural Tapioca vs. Chemical Additives in Charcoal Briquettes',
        date: 'August 23, 2026',
        readTime: '4 min read',
        image: '/Assets/manufacturing/manufacturing2.webp',
        intro: 'When evaluating charcoal briquettes for export, buyers frequently scrutinize fixed carbon, ash content, and moisture levels while overlooking a critical component of manufacturing: the binding agent.',
        sections: [
            {
                heading: '',
                paragraphs: [
                    { html: 'When evaluating charcoal briquettes for export, buyers frequently scrutinize fixed carbon, ash content, and moisture levels while overlooking a critical component of manufacturing: <strong>the binding agent</strong>. Because loose coconut shell charcoal cannot hold its shape on its own, a binder is necessary to hold the material together under high hydraulic pressure. However, the type of binder used separates premium, export-grade charcoal from cheap, low-quality alternatives. Understanding the difference between <strong>food-grade natural binders</strong> and <strong>harmful chemical additives</strong> is essential for importers protecting their brand reputation and consumer safety.' },
                    { html: 'Inferior manufacturers often cut production costs by utilizing <strong>chemical accelerators, petroleum-based glues, or synthetic adhesives</strong>. While these artificial binders are inexpensive and speed up factory production, they release toxic fumes, pungent odors, and chemical residues upon ignition. For shisha smokers, these invisible toxins are the primary culprit behind <strong>harsh smoke, unpleasant tastes, and severe headaches</strong>. In a barbecue setting, synthetic binders contaminate food with chemical off-flavors, making cheap briquettes a hazard to both health and culinary quality.' },
                    { html: 'In stark contrast, responsible Indonesian manufacturers utilize <strong>100% natural, food-grade binders such as tapioca starch</strong>. Sourced directly from sustainably grown cassava, tapioca starch possesses superior adhesive qualities when mixed with coconut shell charcoal and subjected to intense hydraulic compression. Because it is completely organic and neutral, a natural starch binder burns cleanly without interfering with the combustion process. It ensures an entirely <strong>odorless and smokeless lighting experience</strong>, allowing the pure, natural profile of the charcoal to shine through without unwanted chemical interference.' },
                    { html: 'For global importers and educated buyers, vetting a supplier\u2019s binding agents represents a critical checkpoint in quality assurance. Selecting briquettes bound exclusively with <strong>food-grade natural tapioca</strong> ensures a completely odorless combustion process, delivering a safe, headache-free shisha experience and a pristine burn for culinary professionals. By rejecting inferior shortcuts in favor of premium binding standards, manufacturers provide a pure, unadulterated fuel that satisfies the rigorous performance expectations of today\u2019s discerning market.' }
                ]
            },
            {
                heading: 'A natural binder is the key to great quality coconut shell charcoal',
                paragraphs: [
                    { html: 'The integrity of a charcoal briquette extends far beyond its raw carbon content; the binding agent dictates its purity, safety, and smoking performance. By prioritizing <strong>100% natural tapioca over hazardous chemical additives</strong>, global importers can protect their brand reputation, eliminate toxic consumer complaints, and secure a lasting competitive advantage in the premium eco-friendly market.' }
                ]
            }
        ],
        conclusion: ''
    }
];
