export const config = { runtime: "edge" };

const _0x4f12 = [
  'REST_Wine', 'host', 'connection', 'keep-alive', 'proxy-authenticate',
  'proxy-authorization', 'te', 'trailer', 'transfer-encoding', 'upgrade',
  'forwarded', 'x-forwarded-host', 'x-forwarded-proto', 'x-forwarded-port',
  'x-vercel-', 'x-real-ip', 'x-forwarded-for', 'GET', 'HEAD', 'half',
  'manual', 'relay error:', 'Bad Gateway: Tunnel Failed', 'Misconfigured: REST_WINE is not set'
];

const _0x5a1b = function (_0x3c2d) {
  return _0x4f12[_0x3c2d];
};

const _0x92f1b8 = (process['env'][_0x5a1b(0)] || "")['replace'](/\/$/, "");

const _0x2e3d5a = new Set([
  _0x5a1b(1), _0x5a1b(2), _0x5a1b(3), _0x5a1b(4), _0x5a1b(5),
  _0x5a1b(6), _0x5a1b(7), _0x5a1b(8), _0x5a1b(9), _0x5a1b(10),
  _0x5a1b(11), _0x5a1b(12), _0x5a1b(13)
]);

export default async function _0x1a8f92(_0x58f2c1) {
  const _0xbd3a12 = 0x1f2a + 0x2b * -0xb9 + 0x2; // Junk calculation

  if (!_0x92f1b8) {
    return new Response(_0x5a1b(23), { status: 0x1f4 });
  }

  try {
    const _0x3e2a11 = _0x58f2c1['url']['indexOf']("/", 0x8);
    const _0x442f9a = _0x3e2a11 === -0x1
      ? _0x92f1b8 + "/"
      : _0x92f1b8 + _0x58f2c1['url']['slice'](_0x3e2a11);

    const _0x7fb2a1 = new Headers();
    let _0x112d4c = null;

    for (const [_0x4a2c1d, _0x33b1f2] of _0x58f2c1['headers']) {
      const _0xde4f1 = _0x4a2c1d['toLowerCase']();

      if (_0x2e3d5a['has'](_0xde4f1) || _0xde4f1['startsWith'](_0x5a1b(14))) {
        continue;
      }

      if (_0xde4f1 === _0x5a1b(15)) {
        _0x112d4c = _0x33b1f2;
        continue;
      }

      if (_0xde4f1 === _0x5a1b(16)) {
        if (!_0x112d4c) _0x112d4c = _0x33b1f2;
        continue;
      }

      _0x7fb2a1['set'](_0x4a2c1d, _0x33b1f2);
    }

    if (_0x112d4c) {
      _0x7fb2a1['set'](_0x5a1b(16), _0x112d4c);
    }

    const _0x212a4f = _0x58f2c1['method'];
    const _0x55d1a2 = _0x212a4f !== _0x5a1b(17) && _0x212a4f !== _0x5a1b(18);

    const _0xbf2d11 = {
      method: _0x212a4f,
      headers: _0x7fb2a1,
      body: _0x55d1a2 ? _0x58f2c1['body'] : undefined,
      duplex: _0x5a1b(19),
      redirect: _0x5a1b(20)
    };

    return await fetch(_0x442f9a, _0x bf2d11);

  } catch (_0xef312a) {
    console['error'](_0x5a1b(21), _0xef312a);
    return new Response(_0x5a1b(22), { status: 0x22a });
  }
}