/* ================= ARTICLE DATA =================
   Shared by news.html (listing) and article.html (detail page).
   Reused so the cards always match the article detail pages. */

/* Reusable data structure: every article in news.html has a matching entry
   here, so each card opens its own detail page via article.html?id=N. */
const articles = [
    {
        id: 1,
        filter: 'production',
        category: 'Quality & Science',
        title: 'Why Coconut Shell Charcoal Quality Matters for Global Markets',
        date: 'October 17, 2025',
        readTime: '5 min read',
        image: 'Assets/spesification/Charcoal Briquette1.png',
        intro: 'Premium coconut shell charcoal is defined not only by its appearance, but by the consistency of its carbon performance, density, ash content, moisture level, and overall combustion behavior.',
        sections: [
            {
                heading: 'What Determines the Quality of Coconut Shell Charcoal?',
                paragraphs: [
                    'Raw material selection is the first critical step. Mature coconut shells provide a dense and reliable foundation for producing high-performance charcoal. At Ecoco Nusantara, shells are carefully selected and inspected before entering the production process, ensuring that only premium-grade material reaches the kilns.',
                    'From that point forward, every stage of production either preserves or degrades the quality of the final product. Moisture, ash, fixed carbon, density, and burn time are all influenced by how raw material is handled, how carbonization is controlled, and how rigorously each batch is inspected.'
                ]
            },
            {
                heading: '1. Consistent Raw Material',
                paragraphs: [
                    'High-density coconut shells that have reached full maturity yield a charcoal base with naturally high fixed carbon and low ash. Immature or mixed-source shells introduce variability that is almost impossible to correct later in the process.',
                    'Because of this, Ecoco Nusantara sources shells exclusively from established partners in Sumatra and Sulawesi, where the coconuts are grown for their density and uniformity. Every incoming batch is visually inspected and tested for density and cleanliness before it is accepted for carbonization.',
                    'A predictable raw material stream means the next stages of the process can be tuned to produce consistent results, shipment after shipment.'
                ]
            },
            {
                heading: '2. Controlled Carbonization',
                paragraphs: [
                    'Carbonization converts the shells into char by driving off moisture and volatile compounds in an oxygen-limited environment. If the temperature or the airflow varies, so does the char: fixed carbon levels drop, ash content rises, and burn behavior becomes unpredictable.',
                    'At Ecoco Nusantara, carbonization takes place in enclosed kilns where temperature and oxygen are monitored and controlled throughout the cycle. The slow, even burn preserves the shell\u2019s dense carbon structure while removing the volatiles that cause smoke, sparks, and odor during use.',
                    'The result is a stable base char with high fixed carbon and low moisture, ready for crushing, binding, and pressing into premium briquettes.'
                ]
            },
            {
                heading: '3. Quality Control',
                paragraphs: [
                    'Quality control is not a single checkpoint; it is a discipline applied at every stage. Moisture is measured after drying, particle size is verified after sieving, and each finished batch is sampled and tested in our laboratory for moisture, ash content, volatile matter, fixed carbon, and burning duration.',
                    'Only batches that meet our Platinum, Super Premium, or Premium grade standards are approved for packaging and export. Batches outside specification are quarantined and re-evaluated rather than blended away, so the quality you receive never depends on luck.'
                ]
            },
            {
                heading: 'Why Consistency Matters for Export Markets',
                paragraphs: [
                    'International buyers do not purchase a single briquette; they purchase an expectation. A shisha lounge relies on a predictable burn duration for its service experience, while a barbeque brand prints ash and burn-time claims on the packaging it ships worldwide.',
                    'When specifications drift between shipments, downstream customers notice immediately, and the damage to a brand is difficult to reverse. Consistency across moisture, ash, fixed carbon, density, and burn performance is therefore not a luxury, it is the foundation of a durable export partnership.',
                    'This is why we test every batch, document every result, and ship every container with a Certificate of Analysis that reflects exactly what is inside.'
                ]
            }
        ],
        conclusion: 'For international buyers, charcoal quality is ultimately about consistency. A reliable production process ensures that every shipment meets the same expectations, from the first container to long-term supply partnerships.'
    },
    {
        id: 2,
        filter: 'export',
        category: 'Export & Logistics',
        title: 'Selecting the Right Briquette Grade for Your Market',
        date: 'October 16, 2025',
        readTime: '4 min read',
        image: 'Assets/spesification/Charcoal Briquette2.png',
        intro: 'From platinum to premium, choosing the correct grade means matching your buyers\u2019 combustion expectations with a supply chain you can trust for years.',
        sections: [
            {
                heading: 'What Separates One Grade from Another?',
                paragraphs: [
                    'Grades are defined by measurable specifications: fixed carbon content, ash percentage, moisture level, and burning duration. A higher grade typically delivers more heat energy per kilogram, less residual ash, and a longer, steadier burn.',
                    'The right choice depends on the application, the market, and the price your buyer is willing to pay for those characteristics.'
                ]
            },
            {
                heading: 'Matching the Grade to the Application',
                paragraphs: [
                    'Shisha charcoal is judged by low ash, minimal smoke, and an even burn that lasts through a session. Barbeque briquettes prioritize high heat output, long burn time, and consistent ignition across every piece in the bag.',
                    'Industrial buyers may weigh bulk density and calorific value more heavily. Understanding how the charcoal will actually be used is the fastest way to select a grade that satisfies the end customer.'
                ]
            },
            {
                heading: 'Specifications That Travel with the Shipment',
                paragraphs: [
                    'Every Ecoco Nusantara shipment includes laboratory results covering fixed carbon, ash, moisture, and burn performance. We recommend buyers review these numbers against their own quality program, so both sides are aligned before the container is loaded.'
                ]
            }
        ],
        conclusion: 'A well-chosen grade protects your margin and your reputation. With transparent specifications and consistent production, the right grade stays the right grade across every shipment.'
    },
    {
        id: 3,
        filter: 'company',
        category: 'Company',
        title: 'Inside Ecoco Nusantara\u2019s Production Facility',
        date: 'October 15, 2025',
        readTime: '4 min read',
        image: 'Assets/hero/hero2.png',
        intro: 'A look behind the kilns and presses of our factory, where controlled processes turn Indonesian coconut shells into export-ready charcoal.',
        sections: [
            {
                heading: 'From Shells to Sealed Cartons',
                paragraphs: [
                    'Our facility is organized as a continuous flow: intake and inspection, carbonization, crushing and sieving, mixing and molding, drying, quality control, and packaging. Each station is separated physically so material moves forward without cross-contamination.',
                    'The drying line is temperature-controlled and monitored continuously, keeping moisture within our six to nine percent target range even during the humid Indonesian rainy season.'
                ]
            },
            {
                heading: 'A Culture of Documentation',
                paragraphs: [
                    'Every production batch is logged with traceable identifiers from the moment raw shells arrive until the final container is sealed. This documentation supports our Certificate of Analysis and gives buyers complete visibility into what they are receiving.',
                    'Cleanliness, calibration of testing equipment, and adherence to standard operating procedures are reviewed daily, because consistency is engineered, not improvised.'
                ]
            }
        ],
        conclusion: 'A disciplined facility is what turns a natural resource into a reliable product. We invest in that discipline because our buyers depend on it.'
    },
    {
        id: 4,
        filter: 'production',
        category: 'Quality & Science',
        title: 'Coconut Shell Briquettes vs. Wood Charcoal',
        date: 'October 14, 2025',
        readTime: '5 min read',
        image: 'Assets/packaging/Production-bg.png',
        intro: 'Two renewable sources of charcoal, two very different performance profiles. Here is why coconut shell briquettes have become the preferred choice for demanding markets.',
        sections: [
            {
                heading: 'Density and Heat Output',
                paragraphs: [
                    'Coconut shell charcoal is significantly denser than most wood charcoal, which means more energy packed into every kilogram. Higher bulk density also reduces the volume a buyer needs to warehouse and ship for the same amount of burnable energy.',
                    'Wood charcoal is porous and light by comparison, making it harder to control burn duration and harder to pack efficiently for export.'
                ]
            },
            {
                heading: 'Ash, Smoke, and Odor',
                paragraphs: [
                    'When properly carbonized, coconut shell briquettes produce very low ash and minimal smoke, and they burn without the strong residual odor some wood charcoals carry.',
                    'This makes them ideal for indoor applications such as shisha, where smoke and aroma quality are part of the customer experience.'
                ]
            },
            {
                heading: 'Sustainability Considerations',
                paragraphs: [
                    'Both products are renewable, but coconut shell briquettes turn what would otherwise be agricultural waste into a valuable export. Mature shells are collected after the coconut harvest, adding economic value to the farming regions that supply them.'
                ]
            }
        ],
        conclusion: 'For performance, consistency, and export economics, coconut shell briquettes offer a compelling case over traditional wood charcoal.'
    },
    {
        id: 5,
        filter: 'production',
        category: 'Quality & Science',
        title: 'Understanding Fixed Carbon and Ash Content',
        date: 'October 13, 2025',
        readTime: '5 min read',
        image: 'Assets/spesification/PREMIUM AA.png',
        intro: 'Two numbers dominate every charcoal specification sheet. Knowing what they mean will change how you evaluate suppliers.',
        sections: [
            {
                heading: 'Fixed Carbon: The Energy You Actually Buy',
                paragraphs: [
                    'Fixed carbon is the portion of the charcoal that burns as fuel. Higher fixed carbon means more heat, a longer burn, and less smoke. Premium coconut shell briquettes typically reach fixed carbon levels above eighty percent.',
                    'Low fixed carbon usually signals incomplete carbonization or heavy mineral contamination, and it shows up as poor performance at the point of use.'
                ]
            },
            {
                heading: 'Ash: What Is Left Behind',
                paragraphs: [
                    'Ash is the incombustible residue remaining after burning. For shisha, high ash is a direct quality problem: it produces sparks, clogs the bowl, and disrupts the session. For barbeque, excess ash complicates grilling and cleanup.',
                    'Our laboratory measures ash content for every batch, and we keep production parameters tuned to keep it as low as possible.'
                ]
            },
            {
                heading: 'How These Numbers Interact',
                paragraphs: [
                    'Fixed carbon and ash are closely linked. Raising carbonization quality raises fixed carbon and lowers ash; the two numbers together describe the efficiency of the entire production line, from kiln control to handling.'
                ]
            }
        ],
        conclusion: 'A high fixed carbon and low ash reading is the simplest indicator of a well-made briquette. It is the first thing we want our buyers to check.'
    },
    {
        id: 6,
        filter: 'export',
        category: 'Export & Logistics',
        title: 'A Practical Guide to Export Documentation',
        date: 'October 12, 2025',
        readTime: '6 min read',
        image: 'Assets/packaging/Packaging-bg.png',
        intro: 'The charcoal in a sealed container is only as strong as the paperwork that accompanies it. Here is what documentation arrives with every Ecoco Nusantara shipment.',
        sections: [
            {
                heading: 'The Core Set',
                paragraphs: [
                    'Every export container includes a commercial invoice, packing list, and bill of lading. These establish the commercial terms, the physical contents, and the transfer of ownership along the shipping route.',
                    'For most destinations, this core set is enough to clear customs, but additional certificates are often requested depending on the market and the product form.'
                ]
            },
            {
                heading: 'Certificates That Reassure Buyers',
                paragraphs: [
                    'Ecoco Nusantara ships each container with a Certificate of Analysis covering fixed carbon, ash, moisture, and burn performance, so the buyer can verify the cargo against the agreed specification.',
                    'Where required, phytosanitary and fumigation certificates are prepared in line with the importing country\u2019s requirements, protecting the cargo from inspection delays at the destination port.'
                ]
            },
            {
                heading: 'Why Documentation Quality Matters',
                paragraphs: [
                    'Errors in documents are one of the most common causes of port demurrage and customs holds. We maintain a dedicated export team that double-checks every certificate against the purchase order before the container leaves the factory.'
                ]
            }
        ],
        conclusion: 'Reliable documentation protects the shipment and the relationship. It is an integral part of what makes our export service predictable.'
    },
    {
        id: 7,
        filter: 'company',
        category: 'Company',
        title: 'Building Long-Term Partnerships with Global Distributors',
        date: 'October 11, 2025',
        readTime: '4 min read',
        image: 'Assets/about/aboutus-bg.png',
        intro: 'The strongest export relationships are built on predictable quality, honest communication, and terms that work for both sides over many years.',
        sections: [
            {
                heading: 'Starting With a Clear Specification',
                paragraphs: [
                    'Every successful partnership begins with an agreed specification: grade, size and shape, packaging format, and the laboratory ranges for fixed carbon, ash, and moisture. When both sides sign the same numbers, there is nothing left to interpret later.',
                    'We encourage buyers to request samples before the first container, and we keep the same production parameters when we scale up to full volumes.'
                ]
            },
            {
                heading: 'Terms Built for the Long Run',
                paragraphs: [
                    'Our standard terms require a fifty percent advance with the balance before loading, but we are open to negotiating structures that suit established partners. Clear payment terms protect both sides and keep negotiations focused on product quality rather than finance.',
                    'Consistent lead times and responsive communication complete the picture. Distributors can plan their inventory when they know exactly when the next container will arrive.'
                ]
            }
        ],
        conclusion: 'A distributor relationship compounds value over time. Predictability at every stage is what turns a first order into a decade of cooperation.'
    },
    {
        id: 8,
        filter: 'event',
        category: 'Events & News',
        title: 'Reflecting on Our First Export Year',
        date: 'October 10, 2025',
        readTime: '3 min read',
        image: 'Assets/hero/hero.png',
        intro: 'Twelve months, dozens of containers, and one simple lesson: in export, reputation is built one sealed container at a time.',
        sections: [
            {
                heading: 'Milestones Along the Way',
                paragraphs: [
                    'Our first export year saw us move from commissioning the production line to shipping container volumes across international markets. Every milestone, from the first lab approval to the first signed Certificate of Analysis, was a team effort across production, quality, and export.'
                ]
            },
            {
                heading: 'The Lessons We Carry Forward',
                paragraphs: [
                    'The biggest lesson has been that consistency beats volume. A small, perfectly executed shipment earns more trust than a large one that leaves the buyer guessing about quality.',
                    'That discipline now shapes how we plan production, how we test batches, and how we communicate with partners before, during, and after every shipment.'
                ]
            }
        ],
        conclusion: 'Year one was about proving what we can do. The years ahead are about doing it again and again, to the same standard, for partners around the world.'
    },
    {
        id: 9,
        filter: 'production',
        category: 'Production',
        title: 'Sourcing the Finest Shells in Sumatra & Sulawesi',
        date: 'October 9, 2025',
        readTime: '4 min read',
        image: 'Assets/about/indonesia-map.png',
        intro: 'Great charcoal begins long before the kiln. It begins with the maturity and density of the coconut shells we source from two of Indonesia\u2019s richest growing regions.',
        sections: [
            {
                heading: 'Why the Source Region Matters',
                paragraphs: [
                    'Coconut shells from Sumatra and Sulawesi are prized for their thickness and high density, traits that translate directly into high fixed carbon and low ash after carbonization. Shells harvested too early are thin, light, and produce an unstable char.',
                    'By working with established collectors in these regions, we secure a steady supply of shells that have reached full maturity, inspected for cleanliness before they enter the supply chain.'
                ]
            },
            {
                heading: 'From Farm Gate to Factory',
                paragraphs: [
                    'Shells are collected, sun-dried, and transported to our facility where each batch is screened and tested for density and cleanliness. Rejecting poor material at intake protects the consistency of everything that follows.',
                    'This sourcing network also supports local farming communities, adding value to what would otherwise be discarded after the harvest.'
                ]
            }
        ],
        conclusion: 'Premium charcoal is sourced, not manufactured. The quality of our raw material supply is the first guarantee we make to every buyer.'
    }
];
