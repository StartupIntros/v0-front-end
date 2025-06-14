
SELECT
  fr.id AS funding_round_id,
  fr.funding_amount,
  fr.announcement_date,
  fr.round_type,
  fr.valuation_post,
  fr.round_stage,
  s.id AS startup_id,
  s.name AS startup_name,
  s.description AS startup_description,
  s.industry,
  s.location,
  s.logo_url,
  lead_firm.id AS lead_investor_id,
  lead_firm.name AS lead_investor_name,
  -- Aggregate other participants as a JSON array
  (
    SELECT json_agg(json_build_object('id', pf.id, 'name', pf.name))
    FROM funding_round_participants frp
    JOIN investment_firms pf ON pf.id = frp.investment_firm_id
    WHERE frp.funding_round_id = fr.id
      AND frp.investment_firm_id != fr.lead_investor_id
  ) AS other_participants
FROM funding_rounds fr
JOIN startups s ON s.id = fr.startup_id
LEFT JOIN investment_firms lead_firm ON lead_firm.id = fr.lead_investor_id
ORDER BY fr.announcement_date DESC;


| funding_round_id | funding_amount | announcement_date | round_type | valuation_post | round_stage | startup_id | startup_name             | startup_description                                                                                                                                                                                                         | industry        | location          | logo_url                                  | lead_investor_id | lead_investor_name          | other_participants                                                                     |
| ---------------- | -------------- | ----------------- | ---------- | -------------- | ----------- | ---------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ----------------- | ----------------------------------------- | ---------------- | --------------------------- | -------------------------------------------------------------------------------------- |
| 8                | 300000000      | 2023-12-01        | SAFE       | 1500000000     | Seed        | 8          | EdTech Revolution        | EdTech Revolution uses AI to create personalized learning experiences that adapt to each student's learning style and pace.                                                                                                 | EdTech          | Cambridge, MA     | https://example.com/edtech-logo.png       | 4                | Y Combinator                | [{"id":10,"name":"First Round Capital"}]                                               |
| 6                | 500000000      | 2023-11-05        | Equity     | 2000000000     | Seed        | 6          | FinTech Solutions        | FinTech Solutions offers advanced payment processing with lower fees, faster settlements, and enhanced security for e-commerce businesses.                                                                                  | FinTech         | New York, NY      | https://example.com/fintech-logo.png      | 10               | First Round Capital         | [{"id":12,"name":"Union Square Ventures"}]                                             |
| 1                | 1500000000     | 2023-10-01        | Equity     | 7500000000     | Series A    | 1          | TechFlow AI              | TechFlow AI revolutionizes enterprise workflows through intelligent automation. Our platform uses advanced machine learning algorithms to identify bottlenecks, optimize processes, and increase productivity by up to 40%. | AI/ML           | San Francisco, CA | https://example.com/techflow-logo.png     | 1                | Andreessen Horowitz         | [{"id":2,"name":"Sequoia Capital"},{"id":4,"name":"Y Combinator"}]                     |
| 5                | 1200000000     | 2023-09-10        | Equity     | 4500000000     | Series A    | 5          | HealthTech Pro           | HealthTech Pro provides comprehensive remote patient monitoring solutions with AI-powered health insights and predictive analytics.                                                                                         | HealthTech      | Austin, TX        | https://example.com/healthtech-logo.png   | 7                | NEA                         | [{"id":1,"name":"Andreessen Horowitz"},{"id":11,"name":"Lightspeed Venture Partners"}] |
| 2                | 800000000      | 2023-08-15        | Equity     | 3200000000     | Seed        | 2          | QuantumFlow AI           | QuantumFlow AI combines quantum computing with machine learning to solve complex optimization problems that are intractable for classical computers.                                                                        | AI/ML           | Boston, MA        | https://example.com/quantumflow-logo.png  | 1                | Andreessen Horowitz         | [{"id":3,"name":"Accel"},{"id":10,"name":"First Round Capital"}]                       |
| 13               | 400000000      | 2023-08-05        | Equity     | 1800000000     | Seed        | 13         | GameTech Studios         | GameTech Studios creates AI tools that help game developers create more immersive and personalized gaming experiences.                                                                                                      | Gaming          | San Francisco, CA | https://example.com/gametech-logo.png     | 4                | Y Combinator                | null                                                                                   |
| 7                | 2200000000     | 2023-07-22        | Equity     | 8000000000     | Series A    | 7          | Climate Tech Innovations | Climate Tech Innovations develops advanced carbon capture technology that converts CO2 into useful materials and chemicals.                                                                                                 | CleanTech       | Seattle, WA       | https://example.com/climatetech-logo.png  | 3                | Accel                       | [{"id":7,"name":"NEA"},{"id":6,"name":"Kleiner Perkins"}]                              |
| 3                | 3500000000     | 2023-06-20        | Equity     | 20000000000    | Series B    | 3          | BioAnalytics Pro         | BioAnalytics Pro accelerates drug discovery using advanced AI and machine learning to predict molecular behavior and optimize drug candidates.                                                                              | BioTech         | San Diego, CA     | https://example.com/bioanalytics-logo.png | 6                | Kleiner Perkins             | [{"id":7,"name":"NEA"},{"id":8,"name":"Greylock Partners"}]                            |
| 14               | 1100000000     | 2023-06-08        | Equity     | 4800000000     | Series A    | 14         | PropTech Solutions       | PropTech Solutions provides AI-powered real estate investment analysis and portfolio management tools.                                                                                                                      | Real Estate     | Miami, FL         | https://example.com/proptech-logo.png     | 11               | Lightspeed Venture Partners | null                                                                                   |
| 9                | 1800000000     | 2023-05-15        | Equity     | 6200000000     | Series A    | 9          | RoboticsFlow             | RoboticsFlow develops autonomous robots for warehouse automation, improving efficiency and reducing operational costs.                                                                                                      | AI/ML           | San Jose, CA      | https://example.com/robotics-logo.png     | 2                | Sequoia Capital             | [{"id":11,"name":"Lightspeed Venture Partners"},{"id":1,"name":"Andreessen Horowitz"}] |
| 10               | 2800000000     | 2023-04-10        | Equity     | 12000000000    | Series B    | 10         | CyberSecure Pro          | CyberSecure Pro provides advanced threat detection and response using machine learning to protect enterprise networks.                                                                                                      | Enterprise      | Austin, TX        | https://example.com/cybersecure-logo.png  | 1                | Andreessen Horowitz         | [{"id":8,"name":"Greylock Partners"},{"id":3,"name":"Accel"}]                          |
| 11               | 1600000000     | 2023-03-18        | Equity     | 5500000000     | Series A    | 11         | FoodTech Innovations     | FoodTech Innovations creates sustainable plant-based proteins using proprietary fermentation technology.                                                                                                                    | Food & Beverage | Berkeley, CA      | https://example.com/foodtech-logo.png     | 6                | Kleiner Perkins             | null                                                                                   |
| 15               | 2000000000     | 2023-02-14        | Equity     | 7200000000     | Series A    | 15         | EnergyTech Grid          | EnergyTech Grid develops AI-powered smart grid technology to optimize energy distribution and reduce waste.                                                                                                                 | Energy          | Denver, CO        | https://example.com/energytech-logo.png   | 8                | Greylock Partners           | null                                                                                   |
| 12               | 4500000000     | 2022-11-30        | Equity     | 18000000000    | Series B    | 12         | SpaceTech Dynamics       | SpaceTech Dynamics develops advanced satellite communication systems for global internet connectivity.                                                                                                                      | Transportation  | Los Angeles, CA   | https://example.com/spacetech-logo.png    | 5                | Founders Fund               | null                                                                                   |
| 4                | 27500000000    | 2021-10-01        | Equity     | 1000000000000  | Series C    | 4          | Notion                   | Notion is a collaboration platform with modified Markdown support that integrates kanban boards, tasks, wikis and databases.                                                                                                | SaaS            | San Francisco, CA | https://example.com/notion-logo.png       | 1                | Andreessen Horowitz         | [{"id":2,"name":"Sequoia Capital"},{"id":3,"name":"Accel"}]                            |

Fetched funding_rounds: 
Array(12)
0
: 
{id: 1, funding_amount: 1500000000, valuation_post: 7500000000, round_stage: 'Series A', round_type: 'Equity', …}
1
: 
{id: 5, funding_amount: 1200000000, valuation_post: 4500000000, round_stage: 'Series A', round_type: 'Equity', …}
2
: 
{id: 2, funding_amount: 800000000, valuation_post: 3200000000, round_stage: 'Seed', round_type: 'Equity', …}
3
: 
{id: 7, funding_amount: 2200000000, valuation_post: 8000000000, round_stage: 'Series A', round_type: 'Equity', …}
4
: 
{id: 3, funding_amount: 3500000000, valuation_post: 20000000000, round_stage: 'Series B', round_type: 'Equity', …}
5
: 
{id: 14, funding_amount: 1100000000, valuation_post: 4800000000, round_stage: 'Series A', round_type: 'Equity', …}
6
: 
{id: 9, funding_amount: 1800000000, valuation_post: 6200000000, round_stage: 'Series A', round_type: 'Equity', …}
7
: 
{id: 10, funding_amount: 2800000000, valuation_post: 12000000000, round_stage: 'Series B', round_type: 'Equity', …}
8
: 
{id: 11, funding_amount: 1600000000, valuation_post: 5500000000, round_stage: 'Series A', round_type: 'Equity', …}
9
: 
{id: 15, funding_amount: 2000000000, valuation_post: 7200000000, round_stage: 'Series A', round_type: 'Equity', …}
10
: 
{id: 12, funding_amount: 4500000000, valuation_post: 18000000000, round_stage: 'Series B', round_type: 'Equity', …}
11
: 
{id: 4, funding_amount: 27500000000, valuation_post: 1000000000000, round_stage: 'Series C', round_type: 'Equity', …}
length
: 
12
[[Prototype]]
: 
Array(0)

SELECT fr.id, fr.lead_investor_id
FROM funding_rounds fr
LEFT JOIN investment_firms f ON f.id = fr.lead_investor_id
WHERE fr.lead_investor_id IS NOT NULL AND f.id IS NULL;
no rows returned

SELECT fr.id, fr.startup_id
FROM funding_rounds fr
LEFT JOIN startups s ON s.id = fr.startup_id
WHERE s.id IS NULL;
no rows returned

SELECT COUNT(*) FROM funding_rounds;
15


SELECT fr.id, fr.startup_id
FROM funding_rounds fr
LEFT JOIN startups s ON s.id = fr.startup_id
WHERE s.id IS NULL;
no rows returned
