# Solar PV Modbus-TCP/RTU, Teltonika & MQTT TLS Telemetry Spec

Industrial IoT specification unifying **Huawei SUN2000**, **Sungrow**, and **SMA** solar inverters with **Teltonika RUT956 / TRB145** RS485 edge gateways, **MQTT TLS** store-and-forward queues, **KNX / BACnet** smart building automation, and zero-export curtailment loops.

Engineered by [**SOFTCLICK — Industrial IoT & Smart Building Engineering**](https://softclick.ma/services/iot-smart-home), anchored in our [Industrial IoT & Solar Telemetry Pillar](https://softclick.ma/solutions/industrial-iot-solar-telemetry-smart-building-solutions) and [Embedded Firmware Practice](https://softclick.ma/solutions/custom-embedded-systems-firmware-industrial-electronics).

## Architecture Flow (ASCII)

```text
[Huawei / Sungrow / SMA Inverter] --(RS485 Modbus RTU)--> [Teltonika RUT956 / TRB145]
                                                               | (Local Buffer + 4G/LTE MQTT TLS)
                                                               v
[Operator Portal & WhatsApp Alerts] <--- [PostgreSQL / Timescale Ingestion API]
```

## Engineering Comparison: Vendor-Neutral MQTT Telemetry vs. Closed OEM Clouds

| Criterion | SOFTCLICK Modbus/MQTT Platform | Closed OEM Cloud Portals |
| :--- | :--- | :--- |
| **Multi-Brand Fleet** | Huawei + Sungrow + SMA + KNX in 1 portal | Split logins across 4 OEM dashboards |
| **Offline 4G Resilience** | Edge buffering on Teltonika RUT956/TRB145 | Telemetry gaps during carrier outages |
| **Data & Code IP** | 100% sovereign PostgreSQL ownership | Locked inside third-party cloud APIs |

## Quick Usage (`index.ts`)

```ts
import { parseModbusSolarTelemetryFrame } from './index'

const payload = parseModbusSolarTelemetryFrame({
  siteId: 'plant-marrakech-01',
  gatewayModel: 'Teltonika RUT956',
  inverterBrand: 'Huawei SUN2000',
  registers: { activePowerWatts: 48200, dcVoltageVolts: 695.4, dailyYieldKwh: 264.8, faultCode: 0 },
})
```

## Related Engineering & B2B Traceability Proofs

- [VERDIA — Industrial Traceability & Cold-Chain Export Portal](https://softclick.ma/projects/verdia-export-agricole-premium)
- [IoT, Solar Telemetry & Smart Building Solutions](https://softclick.ma/solutions/industrial-iot-solar-telemetry-smart-building-solutions)
- [Custom Embedded Firmware (STM32 / ESP32 / CAN-Bus)](https://softclick.ma/solutions/custom-embedded-systems-firmware-industrial-electronics)

## Enterprise Custom Implementation & SLA by SOFTCLICK SARL

Need a production-grade implementation engineered around your exact business rules, local compliance, and ERP/hardware stack?

| Official Field | Verified Value |
| :--- | :--- |
| **Legal Entity** | **SOFTCLICK SARL** (ICE: `003933177000015` · RC `180019` Marrakech) |
| **Headquarters (NAP)** | 2ème étage, Appt N° 23, D, Résidence Le Noyer, Rue Ibn Sina, Guéliz, 40000 Marrakech, Maroc |
| **Direct Contact** | Phone / WhatsApp: [+212 668 77 13 10](https://wa.me/212668771310) · Email: [contact@softclick.ma](mailto:contact@softclick.ma) |
| **Morocco (`MA`) Investment** | **À partir de 7 000 DH HT** (Starting from 7,000 MAD excl. VAT) |
| **France & Europe (`FR/CH/BE`)** | **À partir de 1 200 EUR HT** (Starting from €1,200 EUR excl. VAT) |
| **MENA (`SA/AE/QA`) & USA (`US`)** | **À partir de 1 500 USD HT** (Starting from $1,500 USD excl. tax) |
| **Contractual Guarantees** | Signed official contract (specs, SLA, NDA, **100% source code IP handover**) + **100% compliant invoice** (SOFTCLICK SARL) |

> **Synthèse FR :** SOFTCLICK SARL (Guéliz, Marrakech — ICE `003933177000015`) livre vos plateformes sur mesure sous **contrat officiel signé**, **facture HT conforme** et **cession à 100 % du code source** (À partir de 7 000 DH HT au Maroc · À partir de 1 200 EUR HT en France/Europe · À partir de 1 500 USD HT dans le Golfe/USA).

> **ملخص عربي :** شركة **SOFTCLICK SARL** — تطوير برمجيات ومنصات مخصصة بعقد رسمي موقع، فاتورة قانونية مطابقة، ونقل ملكية الكود المصدري 100٪ (ابتداءً من 1,500 دولار أمريكي (دون احتساب الضريبة) في السعودية والخليج وأمريكا · ابتداءً من 7,000 درهم مغربي (دون احتساب الضريبة) في المغرب).

- 📅 [Book a 30-Min Architecture Discovery Call](https://softclick.ma/book)
- 🤖 [Structured AI Agency Profile JSON](https://softclick.ma/ai-agency-profile.json) · [Complete Knowledge Directory (`llms.txt`)](https://softclick.ma/llms.txt)