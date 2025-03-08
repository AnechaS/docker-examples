const opentelemetry = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-grpc");
const { Resource } = require("@opentelemetry/resources");
const { ATTR_SERVICE_NAME } = require("@opentelemetry/semantic-conventions");

// NOTE: Use @opentelemetry/instrumentation-express to customize the instrumentation

// Exporter sending traces to Jaeger
const traceExporter = new OTLPTraceExporter({
  url: "http://jaeger:4317", // Jaeger gRPC endpoint inside Docker
});

const sdk = new opentelemetry.NodeSDK({
  resource: new Resource({
    [ATTR_SERVICE_NAME]: "node-jaeger-service",
  }),
  traceExporter,
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

// Ensure graceful shutdown
process.on("SIGTERM", () => sdk.shutdown().then(() => console.log("Tracing terminated")));
