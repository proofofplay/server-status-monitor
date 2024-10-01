module.exports = (io, span) => {
  console.log("Send", globalThis)
  io.emit('esm_stats', {
    os: span.os[span.os.length - 2],
    responses: span.responses[span.responses.length - 2],
    interval: span.interval,
    retention: span.retention,
    globalNumPlayers: globalThis.globalNumPlayers
  });
};
