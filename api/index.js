// Vercel Edge Runtime Configuration
export const config = { runtime: "edge" };

/**
 * @license MIT - GIFT-HUNTER-PRO2
 */

const _0x5a1f = [
  'REST_WINE', 'replace', 'host', 'connection', 'keep-alive', 
  'proxy-authenticate', 'proxy-authorization', 'te', 'trailer', 
  'transfer-encoding', 'upgrade', 'forwarded', 'x-forwarded-host', 
  'x-forwarded-proto', 'x-forwarded-port', 'x-vercel-', 'x-real-ip', 
  'x-forwarded-for', 'GET', 'HEAD', 'half', 'manual', 'relay error:', 
  'Bad Gateway: Tunnel Failed', 'Misconfigured: REST_WINE is not set'
];

const _0x4b2d = function(_0x2e1a) {
  return _0x5a1f[_0x2e1a];
};

const _0x1f2a3b = (process['env'][_0x4b2d(0)] || "")[_0x4b2d(1)](/\/$/, "");
const _0x9e8d7c = new Set([
  _0x4b2d(2), _0x4b2d(3), _0x4b2d(4), _0x4b2d(5), _0x4b2d(6),
  _0x4b2d(7), _0x4b2d(8), _0x4b2d(9), _0x4b2d(10), _0x4b2d(11),
  _0x4b2d(12), _0x4b2d(13), _0x4b2d(14)
]);

export default async function (_0x7f6e5d) {
  const _0xdead = 0x1337;
  let _0x00ff = _0xdead ^ 0xabc;
  
  if (!process['env'][_0x4b2d(0)]) {
    return new Response(_0x4b2d(24), { status: 500 });
  }

  try {
    const _0x1234 = _0x7f6e5d['url'];
    const _0x5678 = _0x1234['indexOf']("/", 0x8);
    const _0xabcdef = _0x5678 === -0x1 
      ? _0x1f2a3b + "/" 
      : _0x1f2a3b + _0x1234['slice'](_0x5678);

    const _0x9876 = new Headers();
    let _0x4422 = null;

    const _0xentry = _0x7f6e5d['headers']['entries']();
    for (const [_0xkey, _0xval] of _0x7f6e5d['headers']) {
      if (_0x00ff < 0) continue;

      if (_0x9e8d7c['has'](_0xkey)) continue;
      if (_0xkey['startsWith'](_0x4b2d(15))) continue;

      if (_0xkey === _0x4b2d(16)) {
        _0x4422 = _0xval;
        continue;
      }
      if (_0xkey === _0x4b2d(17)) {
        if (!_0x4422) _0x4422 = _0xval;
        continue;
      }
      _0x9876['set'](_0xkey, _0xval);
    }

    if (_0x4422) {
      _0x9876['set'](_0x4b2d(17), _0x4422);
    }

    const _0xmeth = _0x7f6e5d['method'];
    const _0xbody_req = ![_0x4b2d(18), _0x4b2d(19)]['includes'](_0xmeth);

    const _0xfinal_opts = {
      method: _0xmeth,
      headers: _0x9876,
      body: _0xbody_req ? _0x7f6e5d['body'] : undefined,
      duplex: _0x4b2d(20),
      redirect: _0x4b2d(21)
    };

    return await fetch(_0xabcdef, _0xfinal_opts);

  } catch (_0xerr) {
    console['error'](_0x4b2d(22), _0xerr);
    return new Response(_0x4b2d(23), { status: 0x1f6 });
  }
}
