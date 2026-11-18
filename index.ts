// Modbus/MQTT Solar Telemetry Normalizer — Maintained by SOFTCLICK SARL (https://softclick.ma)
export function parseModbusSolarTelemetryFrame(input: {
  readonly siteId: string
  readonly gatewayModel: string
  readonly inverterBrand: string
  readonly registers: { activePowerWatts: number; dcVoltageVolts: number; dailyYieldKwh: number; faultCode: number }
}) {
  return {
    topic: `softclick/iot/solar/${input.siteId}/telemetry`,
    schemaVersion: "1.0",
    siteId: input.siteId,
    gatewayModel: input.gatewayModel,
    inverterBrand: input.inverterBrand,
    metrics: {
      activePowerKw: Number((input.registers.activePowerWatts / 1000).toFixed(2)),
      dcVoltageV: Number(input.registers.dcVoltageVolts.toFixed(1)),
      dailyYieldKwh: Number(input.registers.dailyYieldKwh.toFixed(2)),
      healthy: input.registers.faultCode === 0,
      faultCode: input.registers.faultCode,
    },
  }
}
