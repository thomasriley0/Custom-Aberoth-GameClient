const { ipcRenderer } = require("electron");
var HttpsProxyAgent = require('https-proxy-agent');
const urlObj = require('url');
var WebSocket = require('ws');
const Swal = require('sweetalert2')
const path = require('path')
const fs = require('fs')




"use strict";
var MD5 = function(c) {
    function g(a, c) {
        var d, e, b, f, g;
        b = a & 2147483648;
        f = c & 2147483648;
        d = a & 1073741824;
        e = c & 1073741824;
        g = (a & 1073741823) + (c & 1073741823);
        return d & e ? g ^ 2147483648 ^ b ^ f : d | e ? g & 1073741824 ? g ^ 3221225472 ^ b ^ f : g ^ 1073741824 ^ b ^ f : g ^ b ^ f
    }

    function h(a, b, c, d, e, f, h) {
        a = g(a, g(g(b & c | ~b & d, e), h));
        return g(a << f | a >>> 32 - f, b)
    }

    function j(a, b, c, d, e, f, h) {
        a = g(a, g(g(b & d | c & ~d, e), h));
        return g(a << f | a >>> 32 - f, b)
    }

    function k(a, b, c, d, e, f, h) {
        a = g(a, g(g(b ^ c ^ d, e), h));
        return g(a << f | a >>> 32 - f, b)
    }

    function l(a, b, c, d, e, f, h) {
        a = g(a, g(g(c ^ (b | ~d),
            e), h));
        return g(a << f | a >>> 32 - f, b)
    }

    function r(a) {
        var b = "",
            c = "",
            d;
        for (d = 0; 3 >= d; d++) c = a >>> 8 * d & 255, c = "0" + c.toString(16), b += c.substr(c.length - 2, 2);
        return b
    }
    var f = [],
        m, n, p, q, a, d, e, b, f = c.replace(/\r\n/g, "\n");
    c = "";
    for (m = 0; m < f.length; m++) n = f.charCodeAt(m), 128 > n ? c += String.fromCharCode(n) : (127 < n && 2048 > n ? c += String.fromCharCode(n >> 6 | 192) : (c += String.fromCharCode(n >> 12 | 224), c += String.fromCharCode(n >> 6 & 63 | 128)), c += String.fromCharCode(n & 63 | 128));
    f = c;
    c = f.length;
    m = c + 8;
    n = 16 * ((m - m % 64) / 64 + 1);
    p = Array(n - 1);
    for (a = q = 0; a < c;) m =
        (a - a % 4) / 4, q = 8 * (a % 4), p[m] |= f.charCodeAt(a) << q, a++;
    m = (a - a % 4) / 4;
    p[m] |= 128 << 8 * (a % 4);
    p[n - 2] = c << 3;
    p[n - 1] = c >>> 29;
    f = p;
    a = 1732584193;
    d = 4023233417;
    e = 2562383102;
    b = 271733878;
    for (c = 0; c < f.length; c += 16) m = a, n = d, p = e, q = b, a = h(a, d, e, b, f[c + 0], 7, 3614090360), b = h(b, a, d, e, f[c + 1], 12, 3905402710), e = h(e, b, a, d, f[c + 2], 17, 606105819), d = h(d, e, b, a, f[c + 3], 22, 3250441966), a = h(a, d, e, b, f[c + 4], 7, 4118548399), b = h(b, a, d, e, f[c + 5], 12, 1200080426), e = h(e, b, a, d, f[c + 6], 17, 2821735955), d = h(d, e, b, a, f[c + 7], 22, 4249261313), a = h(a, d, e, b, f[c + 8], 7, 1770035416),
        b = h(b, a, d, e, f[c + 9], 12, 2336552879), e = h(e, b, a, d, f[c + 10], 17, 4294925233), d = h(d, e, b, a, f[c + 11], 22, 2304563134), a = h(a, d, e, b, f[c + 12], 7, 1804603682), b = h(b, a, d, e, f[c + 13], 12, 4254626195), e = h(e, b, a, d, f[c + 14], 17, 2792965006), d = h(d, e, b, a, f[c + 15], 22, 1236535329), a = j(a, d, e, b, f[c + 1], 5, 4129170786), b = j(b, a, d, e, f[c + 6], 9, 3225465664), e = j(e, b, a, d, f[c + 11], 14, 643717713), d = j(d, e, b, a, f[c + 0], 20, 3921069994), a = j(a, d, e, b, f[c + 5], 5, 3593408605), b = j(b, a, d, e, f[c + 10], 9, 38016083), e = j(e, b, a, d, f[c + 15], 14, 3634488961), d = j(d, e, b, a, f[c + 4], 20, 3889429448),
        a = j(a, d, e, b, f[c + 9], 5, 568446438), b = j(b, a, d, e, f[c + 14], 9, 3275163606), e = j(e, b, a, d, f[c + 3], 14, 4107603335), d = j(d, e, b, a, f[c + 8], 20, 1163531501), a = j(a, d, e, b, f[c + 13], 5, 2850285829), b = j(b, a, d, e, f[c + 2], 9, 4243563512), e = j(e, b, a, d, f[c + 7], 14, 1735328473), d = j(d, e, b, a, f[c + 12], 20, 2368359562), a = k(a, d, e, b, f[c + 5], 4, 4294588738), b = k(b, a, d, e, f[c + 8], 11, 2272392833), e = k(e, b, a, d, f[c + 11], 16, 1839030562), d = k(d, e, b, a, f[c + 14], 23, 4259657740), a = k(a, d, e, b, f[c + 1], 4, 2763975236), b = k(b, a, d, e, f[c + 4], 11, 1272893353), e = k(e, b, a, d, f[c + 7], 16, 4139469664),
        d = k(d, e, b, a, f[c + 10], 23, 3200236656), a = k(a, d, e, b, f[c + 13], 4, 681279174), b = k(b, a, d, e, f[c + 0], 11, 3936430074), e = k(e, b, a, d, f[c + 3], 16, 3572445317), d = k(d, e, b, a, f[c + 6], 23, 76029189), a = k(a, d, e, b, f[c + 9], 4, 3654602809), b = k(b, a, d, e, f[c + 12], 11, 3873151461), e = k(e, b, a, d, f[c + 15], 16, 530742520), d = k(d, e, b, a, f[c + 2], 23, 3299628645), a = l(a, d, e, b, f[c + 0], 6, 4096336452), b = l(b, a, d, e, f[c + 7], 10, 1126891415), e = l(e, b, a, d, f[c + 14], 15, 2878612391), d = l(d, e, b, a, f[c + 5], 21, 4237533241), a = l(a, d, e, b, f[c + 12], 6, 1700485571), b = l(b, a, d, e, f[c + 3], 10, 2399980690),
        e = l(e, b, a, d, f[c + 10], 15, 4293915773), d = l(d, e, b, a, f[c + 1], 21, 2240044497), a = l(a, d, e, b, f[c + 8], 6, 1873313359), b = l(b, a, d, e, f[c + 15], 10, 4264355552), e = l(e, b, a, d, f[c + 6], 15, 2734768916), d = l(d, e, b, a, f[c + 13], 21, 1309151649), a = l(a, d, e, b, f[c + 4], 6, 4149444226), b = l(b, a, d, e, f[c + 11], 10, 3174756917), e = l(e, b, a, d, f[c + 2], 15, 718787259), d = l(d, e, b, a, f[c + 9], 21, 3951481745), a = g(a, m), d = g(d, n), e = g(e, p), b = g(b, q);
    return (r(a) + r(d) + r(e) + r(b)).toLowerCase()
};

function Queue() {
    var a = [],
        b = 0;
    this.getLength = function() {
        return a.length - b
    };
    this.isEmpty = function() {
        return 0 == a.length
    };
    this.enqueue = function(b) {
        a.push(b)
    };
    this.dequeue = function() {
        if (0 != a.length) {
            var c = a[b];
            2 * ++b >= a.length && (a = a.slice(b), b = 0);
            return c
        }
    };
    this.peek = function() {
        return 0 < a.length ? a[b] : void 0
    }
};
(function() {
    'use strict';

    function i(a) {
        throw a;
    }
    var l = void 0,
        aa = this;

    function p(a, d) {
        var b = a.split("."),
            c = aa;
        !(b[0] in c) && c.execScript && c.execScript("var " + b[0]);
        for (var f; b.length && (f = b.shift());) !b.length && d !== l ? c[f] = d : c = c[f] ? c[f] : c[f] = {}
    };
    var q = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array;
    new(q ? Uint8Array : Array)(256);
    var r;
    for (r = 0; 256 > r; ++r)
        for (var t = r, ba = 7, t = t >>> 1; t; t >>>= 1) --ba;
    var ca = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759,
        2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977,
        2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755,
        2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956,
        3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
        936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117
    ];
    q && new Uint32Array(ca);

    function u(a) {
        var d = a.length,
            b = 0,
            c = Number.POSITIVE_INFINITY,
            f, e, g, h, j, k, n, m, s;
        for (m = 0; m < d; ++m) a[m] > b && (b = a[m]), a[m] < c && (c = a[m]);
        f = 1 << b;
        e = new(q ? Uint32Array : Array)(f);
        g = 1;
        h = 0;
        for (j = 2; g <= b;) {
            for (m = 0; m < d; ++m)
                if (a[m] === g) {
                    k = 0;
                    n = h;
                    for (s = 0; s < g; ++s) k = k << 1 | n & 1, n >>= 1;
                    for (s = k; s < f; s += j) e[s] = g << 16 | m;
                    ++h
                }++ g;
            h <<= 1;
            j <<= 1
        }
        return [e, b, c]
    };
    var v = [],
        w;
    for (w = 0; 288 > w; w++) switch (!0) {
        case 143 >= w:
            v.push([w + 48, 8]);
            break;
        case 255 >= w:
            v.push([w - 144 + 400, 9]);
            break;
        case 279 >= w:
            v.push([w - 256 + 0, 7]);
            break;
        case 287 >= w:
            v.push([w - 280 + 192, 8]);
            break;
        default:
            i("invalid literal: " + w)
    }

    function da() {
        var a = x;
        switch (!0) {
            case 3 === a:
                return [257, a - 3, 0];
            case 4 === a:
                return [258, a - 4, 0];
            case 5 === a:
                return [259, a - 5, 0];
            case 6 === a:
                return [260, a - 6, 0];
            case 7 === a:
                return [261, a - 7, 0];
            case 8 === a:
                return [262, a - 8, 0];
            case 9 === a:
                return [263, a - 9, 0];
            case 10 === a:
                return [264, a - 10, 0];
            case 12 >= a:
                return [265, a - 11, 1];
            case 14 >= a:
                return [266, a - 13, 1];
            case 16 >= a:
                return [267, a - 15, 1];
            case 18 >= a:
                return [268, a - 17, 1];
            case 22 >= a:
                return [269, a - 19, 2];
            case 26 >= a:
                return [270, a - 23, 2];
            case 30 >= a:
                return [271, a - 27, 2];
            case 34 >= a:
                return [272, a -
                    31, 2
                ];
            case 42 >= a:
                return [273, a - 35, 3];
            case 50 >= a:
                return [274, a - 43, 3];
            case 58 >= a:
                return [275, a - 51, 3];
            case 66 >= a:
                return [276, a - 59, 3];
            case 82 >= a:
                return [277, a - 67, 4];
            case 98 >= a:
                return [278, a - 83, 4];
            case 114 >= a:
                return [279, a - 99, 4];
            case 130 >= a:
                return [280, a - 115, 4];
            case 162 >= a:
                return [281, a - 131, 5];
            case 194 >= a:
                return [282, a - 163, 5];
            case 226 >= a:
                return [283, a - 195, 5];
            case 257 >= a:
                return [284, a - 227, 5];
            case 258 === a:
                return [285, a - 258, 0];
            default:
                i("invalid length: " + a)
        }
    }
    var y = [],
        x, z;
    for (x = 3; 258 >= x; x++) z = da(), y[x] = z[2] << 24 | z[1] << 16 | z[0];
    q && new Uint32Array(y);

    function A(a, d) {
        this.g = [];
        this.h = 32768;
        this.d = this.f = this.a = this.l = 0;
        this.input = q ? new Uint8Array(a) : a;
        this.m = !1;
        this.i = B;
        this.r = !1;
        if (d || !(d = {})) d.index && (this.a = d.index), d.bufferSize && (this.h = d.bufferSize), d.bufferType && (this.i = d.bufferType), d.resize && (this.r = d.resize);
        switch (this.i) {
            case C:
                this.b = 32768;
                this.c = new(q ? Uint8Array : Array)(32768 + this.h + 258);
                break;
            case B:
                this.b = 0;
                this.c = new(q ? Uint8Array : Array)(this.h);
                this.e = this.z;
                this.n = this.v;
                this.j = this.w;
                break;
            default:
                i(Error("invalid inflate mode"))
        }
    }
    var C = 0,
        B = 1,
        D = {
            t: C,
            s: B
        };
    A.prototype.k = function() {
        for (; !this.m;) {
            var a = E(this, 3);
            a & 1 && (this.m = !0);
            a >>>= 1;
            switch (a) {
                case 0:
                    var d = this.input,
                        b = this.a,
                        c = this.c,
                        f = this.b,
                        e = l,
                        g = l,
                        h = l,
                        j = c.length,
                        k = l;
                    this.d = this.f = 0;
                    e = d[b++];
                    e === l && i(Error("invalid unHd block header: LEN(first byte)"));
                    g = e;
                    e = d[b++];
                    e === l && i(Error("invalid unHd block header: LEN(second byte)"));
                    g |= e << 8;
                    e = d[b++];
                    e === l && i(Error("invalid unHd block header: NLEN(first byte)"));
                    h = e;
                    e = d[b++];
                    e === l && i(Error("invalid unHd block header: NLEN(second byte)"));
                    h |=
                        e << 8;
                    g === ~h && i(Error("invalid unHd block header: length verify"));
                    b + g > d.length && i(Error("input buffer is broken"));
                    switch (this.i) {
                        case C:
                            for (; f + g > c.length;)

                            {
                                k = j - f;
                                g -= k;
                                if (q) {
                                    c.set(d.subarray(b, b + k), f), f += k, b += k;
                                } else {
                                    for (; k--;) c[f++] = d[b++];
                                }
                                this.b = f;
                                c = this.e();
                                f = this.b
                            }
                            break;
                        case B:
                            for (; f + g > c.length;) c = this.e({
                                p: 2
                            });
                            break;
                        default:
                            i(Error("invalid inflate mode"))
                    }

                    if (q) {
                        c.set(d.subarray(b, b + g), f), f += g, b += g;
                    } else {
                        for (; g--;) c[f++] = d[b++];
                    }

                    this.a = b;
                    this.b = f;
                    this.c = c;
                    break;
                case 1:
                    this.j(ea, fa);
                    break;

                case 2:
                    ga(this);
                    break;
                default:
                    i(Error("unknown BTYPE: " + a))
            }
        }
        return this.n()
    };
    var F = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        G = q ? new Uint16Array(F) : F,
        H = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
        I = q ? new Uint16Array(H) : H,
        J = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
        K = q ? new Uint8Array(J) : J,
        L = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
        ha = q ? new Uint16Array(L) : L,
        ia = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
            13, 13
        ],
        M = q ? new Uint8Array(ia) : ia,
        N = new(q ? Uint8Array : Array)(288),
        O, ja;
    O = 0;
    for (ja = N.length; O < ja; ++O) N[O] = 143 >= O ? 8 : 255 >= O ? 9 : 279 >= O ? 7 : 8;
    var ea = u(N),
        P = new(q ? Uint8Array : Array)(30),
        Q, ka;
    Q = 0;
    for (ka = P.length; Q < ka; ++Q) P[Q] = 5;
    var fa = u(P);

    function E(a, d) {
        for (var b = a.f, c = a.d, f = a.input, e = a.a, g; c < d;) g = f[e++], g === l && i(Error("input buffer is broken")), b |= g << c, c += 8;
        g = b & (1 << d) - 1;
        a.f = b >>> d;
        a.d = c - d;
        a.a = e;
        return g
    }

    function R(a, d) {
        for (var b = a.f, c = a.d, f = a.input, e = a.a, g = d[0], h = d[1], j, k, n; c < h;) j = f[e++], j === l && i(Error("input buffer is broken")), b |= j << c, c += 8;
        k = g[b & (1 << h) - 1];
        n = k >>> 16;
        a.f = b >> n;
        a.d = c - n;
        a.a = e;
        return k & 65535
    }

    function ga(a) {
        function d(a, b, c) {
            var d, e, f, g;
            for (g = 0; g < a;) switch (d = R(this, b), d) {
                case 16:
                    for (f = 3 + E(this, 2); f--;) c[g++] = e;
                    break;
                case 17:
                    for (f = 3 + E(this, 3); f--;) c[g++] = 0;
                    e = 0;
                    break;
                case 18:
                    for (f = 11 + E(this, 7); f--;) c[g++] = 0;
                    e = 0;
                    break;
                default:
                    e = c[g++] = d
            }
            return c
        }
        var b = E(a, 5) + 257,
            c = E(a, 5) + 1,
            f = E(a, 4) + 4,
            e = new(q ? Uint8Array : Array)(G.length),
            g, h, j, k;
        for (k = 0; k < f; ++k) e[G[k]] = E(a, 3);
        g = u(e);
        h = new(q ? Uint8Array : Array)(b);
        j = new(q ? Uint8Array : Array)(c);
        a.j(u(d.call(a, b, g, h)), u(d.call(a, c, g, j)))
    }
    A.prototype.j = function(a, d) {
        var b = this.c,
            c = this.b;
        this.o = a;
        for (var f = b.length - 258, e, g, h, j; 256 !== (e = R(this, a));)

            if (256 > e) {
                c >= f && (this.b = c, b = this.e(), c = this.b), b[c++] = e;
            }
        else {
            g = e - 257;
            j = I[g];
            0 < K[g] && (j += E(this, K[g]));
            e = R(this, d);
            h = ha[e];
            0 < M[e] && (h += E(this, M[e]));
            c >= f && (this.b = c, b = this.e(), c = this.b);
            for (; j--;) b[c] = b[c++ - h]
        }

        for (; 8 <= this.d;) this.d -= 8, this.a--;
        this.b = c
    };
    A.prototype.w = function(a, d) {
        var b = this.c,
            c = this.b;
        this.o = a;
        for (var f = b.length, e, g, h, j; 256 !== (e = R(this, a));)

            if (256 > e) {
                c >= f && (b = this.e(), f = b.length), b[c++] = e;
            }
        else {
            g = e - 257;
            j = I[g];
            0 < K[g] && (j += E(this, K[g]));
            e = R(this, d);
            h = ha[e];
            0 < M[e] && (h += E(this, M[e]));
            c + j > f && (b = this.e(), f = b.length);
            for (; j--;) b[c] = b[c++ - h]
        }
        for (; 8 <= this.d;) this.d -= 8, this.a--;
        this.b = c
    };
    A.prototype.e = function() {
        var a = new(q ? Uint8Array : Array)(this.b - 32768),
            d = this.b - 32768,
            b, c, f = this.c;
        if (q) {
            a.set(f.subarray(32768, a.length));
        } else {
            b = 0;
            for (c = a.length; b < c; ++b) a[b] = f[b + 32768]
        }
        this.g.push(a);
        this.l += a.length;
        if (q) {
            f.set(f.subarray(d, d + 32768));
        } else {
            for (b = 0; 32768 > b; ++b) f[b] = f[d + b];
        }
        this.b = 32768;
        return f
    };
    A.prototype.z = function(a) {
        var d, b = this.input.length / this.a + 1 | 0,
            c, f, e, g = this.input,
            h = this.c;
        a && ("number" === typeof a.p && (b = a.p), "number" === typeof a.u && (b += a.u));
        2 > b ? (c = (g.length - this.a) / this.o[2], e = 258 * (c / 2) | 0, f = e < h.length ? h.length + e : h.length << 1) : f = h.length * b;
        q ? (d = new Uint8Array(f), d.set(h)) : d = h;
        return this.c = d
    };
    A.prototype.n = function() {
        var a = 0,
            d = this.c,
            b = this.g,
            c, f = new(q ? Uint8Array : Array)(this.l + (this.b - 32768)),
            e, g, h, j;
        if (0 === b.length) return q ? this.c.subarray(32768, this.b) : this.c.slice(32768, this.b);
        e = 0;
        for (g = b.length; e < g; ++e) {
            c = b[e];
            h = 0;
            for (j = c.length; h < j; ++h) f[a++] = c[h]
        }
        e = 32768;
        for (g = this.b; e < g; ++e) f[a++] = d[e];
        this.g = [];
        return this.buffer = f
    };
    A.prototype.v = function() {
        var a, d = this.b;
        q ? this.r ? (a = new Uint8Array(d), a.set(this.c.subarray(0, d))) : a = this.c.subarray(0, d) : (this.c.length > d && (this.c.length = d), a = this.c);
        return this.buffer = a
    };
    var la = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    q && new Uint16Array(la);
    var ma = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258];
    q && new Uint16Array(ma);
    var na = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0];
    q && new Uint8Array(na);
    var oa = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    q && new Uint16Array(oa);
    var pa = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
    q && new Uint8Array(pa);
    var S = new(q ? Uint8Array : Array)(288),
        T, qa;
    T = 0;
    for (qa = S.length; T < qa; ++T) S[T] = 143 >= T ? 8 : 255 >= T ? 9 : 279 >= T ? 7 : 8;
    u(S);
    var U = new(q ? Uint8Array : Array)(30),
        V, ra;
    V = 0;
    for (ra = U.length; V < ra; ++V) U[V] = 5;
    u(U);

    function W(a, d) {
        var b, c;
        this.input = a;
        this.a = 0;
        if (d || !(d = {})) d.index && (this.a = d.index), d.verify && (this.A = d.verify);
        b = a[this.a++];
        c = a[this.a++];
        switch (b & 15) {
            case sa:
                this.method = sa;
                break;
            default:
                i(Error("unsupported compression method"))
        }
        0 !== ((b << 8) + c) % 31 && i(Error("invalid fcheck flag:" + ((b << 8) + c) % 31));
        c & 32 && i(Error("fdict flag is not supported"));
        this.q = new A(a, {
            index: this.a,
            bufferSize: d.bufferSize,
            bufferType: d.bufferType,
            resize: d.resize
        })
    }
    W.prototype.k = function() {
        var a = this.input,
            d, b;
        d = this.q.k();
        this.a = this.q.a;
        if (this.A) {
            b = (a[this.a++] << 24 | a[this.a++] << 16 | a[this.a++] << 8 | a[this.a++]) >>> 0;
            var c = d;
            if ("string" === typeof c) {
                var f = c.split(""),
                    e, g;
                e = 0;
                for (g = f.length; e < g; e++) f[e] = (f[e].charCodeAt(0) & 255) >>> 0;
                c = f
            }
            for (var h = 1, j = 0, k = c.length, n, m = 0; 0 < k;) {
                n = 1024 < k ? 1024 : k;
                k -= n;
                do h += c[m++], j += h; while (--n);
                h %= 65521;
                j %= 65521
            }
            b !== (j << 16 | h) >>> 0 && i(Error("invalid adler-32 checksum"))
        }
        return d
    };
    p("Zlib.Inflate", W);
    p("Zlib.Inflate.prototype.decompress", W.prototype.k);
    var X = {
            ADAPTIVE: D.s,
            BLOCK: D.t
        },
        Y, Z, $, ta;

    if (Object.keys) {
        Y = Object.keys(X);
    } else {
        for (Z in Y = [], $ = 0, X) Y[$++] = Z;
    }
    $ = 0;
    for (ta = Y.length; $ < ta; ++$) Z = Y[$], p("Zlib.Inflate.BufferType." + Z, X[Z]);
    var sa = 8;
}).call(this);

function App(proxy) {
    this.canvas = document.getElementById('screen');
    this.screenkey = document.getElementById('screenkey');

    //define proxy variable for http proxy support
    this.proxy = proxy;
    //define sessionActive bool to false
    this.sessionActive = false;

    try {
        var a = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        window.AudioContext = a ? null : window.AudioContext || window.webkitAudioContext;
    } catch (g) {}

    if (window.autoLoad) {
        this.autoLoad = window.autoLoad;
    } else {
        this.autoLoad = sessionStorage.data && JSON.parse(sessionStorage.data);
    }

    this.primary = document.getElementById('primary');
    this.speechTxt = document.getElementById('tosay');
    this.cmdBtn = document.getElementById('docmd');
    this.cmdList = document.getElementById('commandlist');
    this.escBtn = document.getElementById('esc');
    this.dirpad = document.getElementById('dirpad');
    this.dropper = document.getElementById('dropmode');
    this.atkBtn = document.getElementById('attack');
    this.border = document.getElementById('border');
    this.ctrlLeft = document.getElementById('controlsleft');
    this.ctrlRight = document.getElementById('controlsright');
    this.ctrlAlt = document.getElementById('controlsalt');
    this.dropLabel = this.dropper ? this.dropper.parentNode : null;
    this.altHeight = document.getElementById('altheight');
    this.screenResized();
    this.addEvent(window, 'resize', this.screenResized);

    try {
        if (localStorage.data) {
            this.data = JSON.parse(localStorage.data);
            delete this.data.sounds;
        }
    } catch (ex) {

        this.data = null;
    }

    if (!this.data) {
        this.data = {
            gameSize: null,
            fontSize: null,
            user: "",
            pwd: ""
        };
    }

    this.localSounds = {};
    this.changedSounds = {};
    for (var i = 0, iMax = localStorage.length; i < iMax; ++i) {
        var key = localStorage.key(i);
        if (!key) {} else if (key.lastIndexOf('sound', 0) === 0) {
            var prop;
            if (key.lastIndexOf('soundtime:', 0) === 0) {
                prop = 'time';
            } else if (key.lastIndexOf('sounddata:', 0) === 0) {
                prop = 'data';
            } else {
                localStorage.removeItem(key);
                continue;
            }

            var name = key.substring(10);
            var f = this.localSounds[name];
            if (!f) {
                f = {};
                this.localSounds[name] = f;
            }

            try {
                f[prop] = JSON.parse(localStorage.getItem(key));
            } catch (g) {
                this.deleteSound(name);
            }
        }
    }
    for (var name in this.localSounds) {
        var f = this.localSounds[name];
        if (!f.time || !f.data) {

            this.deleteSound(name);
        }
    }

    if (!this.autoLoad) {
        this.nameInput = document.getElementById('nameinput');
        this.passwordInput = document.getElementById('passwordinput');
        this.loadButton = document.getElementById('loadbutton');
        this.gameSize = document.getElementById('gamesize');
        this.fontSize = document.getElementById('fontsize');
        this.encryptPassword = true;
        this.ipAddress = "192.99.0.191";
        this.screenDefinition = 0;

        var name = {
            2: "Half",
            4: "Normal",
            8: "Double",
            12: "Triple"
        };
        for (var i = 2; i < 13; ++i) {
            var txt = name[i];
            var c = this.greatestCommonDivisor(i, 4);
            var val = (i / c) + "/" + (4 / c);
            if (!txt) {
                txt = (i / 4).toString();
                if (txt.length > 4)
                    txt = "...";
            }
            this.addOption(this.gameSize, txt, val);
        }
        this.gameSize.value = '1/1';

        for (var i = 8; i < 15; ++i)
            this.addOption(this.fontSize, i, i);
        for (var i = 16; i < 25; i += 2)
            this.addOption(this.fontSize, i);
        this.addOption(this.fontSize, 28);
        this.addOption(this.fontSize, 36);
        this.addOption(this.fontSize, 48);
        this.addOption(this.fontSize, 72);
        this.fontSize.value = 12;

        this.rememberPassword = document.getElementById("remembe" + "rpassword");
        this.reloadOnDeath = document.getElementById("reloadondeath");
    }

    this.mouse = {
        x: 0,
        y: 0,
        button: 0
    };
    this.dirmouse = {
        x: 0,
        y: 0
    };
    this.atkmouse = {
        x: 0,
        y: 0
    };



    this.game = new GameClient(this);

    var scaling = this.getScaling();
    this.game.setGameAndFontSize(scaling.up, scaling.down, this.getFontSize());


    if (this.autoLoad && this.autoStartGame())
        return;

    this.addEvent(this.loadButton, 'click', this.loadButtonClick);
    this.addEvent(this.nameInput, 'keyup', this.passwordKeyUp);
    this.addEvent(this.passwordInput, 'keyup', this.passwordKeyUp);
    this.addEvent(this.gameSize, 'change', this.refreshScreenDemo);
    this.addEvent(this.fontSize, 'change', this.refreshScreenDemo);
    this.addEvent(this.reloadOnDeath, 'change', this.reloadOnDeathChange);

    this.nameInput.value = this.data.user ? this.data.user : '';
    this.passwordInput.value = this.data.user && this.data.pwd ? this.data.pwd : '';

    if (this.data.gameSize)
        this.gameSize.value = this.data.gameSize;
    if (this.data.fontSize)
        this.fontSize.value = this.data.fontSize;
    if (this.data.rememberPassword)
        this.rememberPassword.checked = true;
    if (this.data.reloadOnDeath)
        this.reloadOnDeath.checked = true;

    this.nameInput.disabled = false;
    this.passwordInput.disabled = false;
    this.gameSize.disabled = false;
    this.fontSize.disabled = false;
    this.reloadOnDeath.disabled = false;
    if (this.data.user && this.data.pwd)
        this.loadButton.disabled = false;

    this.refreshScreenDemo();
};

App.prototype.Types = {
    KeyAction: {
        KEY_PRESSED: 0,
        KEY_RELEASED: 1,
        KEY_TYPED: 2,
        SPECIAL_ACTION: 11,
        SPECIAL_ACTION_BUFFER_SPEECH: 12,
        SPECIAL_ACTION_DROP_EQUIPPED: 13
    },

    SpecialAction: {
        BEGIN_FIGHTING: 1,
        END_FIGHTING: 2,
        ABOUT_TO_SPEAK: 5,
        SPEAK_SPEECH_BUFFER: 6
    },

    MouseAction: {
        MOUSE_PRESSED: 0,
        MOUSE_RELEASED: 1
    },

    Misc: {
        NUM_POSSIBLE_KEYS: 256,
        MAX_SUB_WINDOWS: 255
    }

};

App.prototype.deleteSound = function(name, defer) {
    if (defer) {
        delete this.localSounds[name];
        this.changedSounds[name] = 2;
        this.game.lastSoundStore = 0;
    } else {
        try {
            localStorage.removeItem('soundtime:' + name);
            localStorage.removeItem('sounddata:' + name);
        } catch (ex) {

        }
    }
};
App.prototype.clearSounds = function() {
    try {
        for (var i = localStorage.length - 1; i >= 0; --i) {
            var key = localStorage.key(i);
            if (key.lastIndexOf('sound', 0) === 0) {
                localStorage.removeItem(key);
            }
        }

    } catch (ex) {

    }
};
App.prototype.storeSounds = function() {

    var time = new Date().getTime();
    var changedSounds = this.changedSounds;
    var localSounds = this.localSounds;
    var soundData = 'sounddata:';
    var soundTime = 'soundtime:';
    var Ea = 0;
    var Eb = 0;
    var Ec = 0;
    try {
        for (var name in changedSounds) {
            if (!localSounds[name]) {
                this.deleteSound(name);
                delete changedSounds[name];
                ++Ec;
            }
        }

        try {
            var all = true;
            for (var name in changedSounds) {
                if (changedSounds[name] === 2) {
                    localStorage.setItem(soundData + name, JSON.stringify(localSounds[name].data));
                    ++Ea;
                } else {
                    ++Eb;
                }
                localStorage.setItem(soundTime + name, JSON.stringify(localSounds[name].time));
                delete changedSounds[name];
                if (new Date().getTime() - time > 10) {
                    all = false;
                    break;
                }
            }
            if (all) {
                this.game.soundChanged = false;
                this.game.lastSoundStore = this.game.getTimestamp();
            }
        } catch (ex) {

            var Dq = null;
            var Dr = new Date().getTime();
            for (var Ds in localSounds) {
                var time = localSounds[Ds].time;
                if (time < Dr) {
                    Dr = time;
                    Dq = Ds;
                }
            }
            if (Dq) {
                //clearing oldest sound
                this.deleteSound(Dq);
                delete localSounds[Dq];

            }
        }
    } catch (ex) {

        this.clearSounds();
    }
    var deltaMs = new Date().getTime() - time;

};

App.prototype.addOption = function(list, txt, val, disabled) {
    var opt = document.createElement("option");
    opt.text = txt;
    opt.value = val ? val : txt;
    if (disabled)
        opt.disabled = true;
    list.add(opt);
};

App.prototype.screenResized = function(event) {
    if (!this.dirpad && !this.atkBtn) return;

    var width = window.innerWidth;
    var height = window.innerHeight;
    var HE = this.canvas.width;
    if (this.dirpad) HE += this.dirpad.width;
    if (this.atkBtn) HE += this.atkBtn.width;
    var Ef = width >= height && width > HE + 10;
    if (Ef) {
        this.moveElement(this.dirpad, this.ctrlLeft);
        this.moveElement(this.atkBtn, this.ctrlRight);
        this.dirpad.className = '';
        this.atkBtn.className = '';
    } else {
        this.moveElement(this.dirpad, this.ctrlAlt);
        this.moveElement(this.atkBtn, this.ctrlAlt);
        this.moveElement(this.altHeight, null);
        this.moveElement(this.altHeight, this.ctrlAlt);
        this.dirpad.className = 'padleft';
        this.atkBtn.className = 'padright';
    }
};
App.prototype.moveElement = function(Eg, Df) {
    if (Eg) {
        var De = Eg.parentNode;
        if (De !== Df) {
            if (De)
                De.removeChild(Eg);
            if (Df)
                Df.appendChild(Eg);
        }
    }
};

App.prototype.loadButtonClick = function(event) {

    var name = this.nameInput.value,
        password = this.passwordInput.value;
    this.tryStartingGame(name, password);

    return false;
};
App.prototype.passwordKeyUp = function(event) {
    var name = this.nameInput.value,
        password = this.passwordInput.value;
    this.loadButton.disabled = !name || !password;
    if (event.keyCode === 13 && !this.loadButton.disabled)
        this.tryStartingGame(name, password);
    return event.keyCode !== 13;
};
App.prototype.reloadOnDeathChange = function(event) {
    this.data.reloadOnDeath = this.reloadOnDeath.checked;
    localStorage.data = JSON.stringify(this.data);
};

App.prototype.greatestCommonDivisor = function(x0, y0) {
    var w, x = x0,
        y = y0;
    while (y) {
        w = x % y;
        x = y;
        y = w;
    }
    return x;
};

App.prototype.getScaling = function(Ej) {
    if (this.autoLoad)
        return {
            up: this.autoLoad.scaleup,
            down: this.autoLoad.scaledown
        };
    var Eh = this.gameSize.value;
    var Ei = Eh ? Eh.split("/") : [1, 1];
    var scale = {
        up: Number(Ei[0]),
        down: Number(Ei[1])
    };
    if (Ej) {
        this.data.gameSize = this.gameSize.value;
        localStorage.data = JSON.stringify(this.data);
    }
    return scale;
};

App.prototype.getFontSize = function(Ej) {
    if (this.autoLoad)
        return this.autoLoad.fontsize;
    varfontSize = Number(this.fontSize.value);
    if (Ej) {
        this.data.fontSize = fontSize;
        localStorage.data = JSON.stringify(this.data);
    }
    returnfontSize;
};


App.prototype.turnOnRememberPassword = function() {
    var rememberPassword = this.rememberPassword.checked;
    this.data.rememberPassword = rememberPassword;
    localStorage.data = JSON.stringify(this.data);
    return rememberPassword;
};

App.prototype.refreshScreenDemo = function(event) {
    var scaling = this.getScaling();
    varfontSize = this.getFontSize();
    this.game.setGameAndFontSize(scaling.up, scaling.down, fontSize);
    this.game.setOnScreenMessage("");
    this.game.setOnScreenMessage("Aberoth");
};

App.prototype.addEvent = function(ele, type, listener) {
    if (!ele) return;
    if (!this.listenerLookup)
        this.listenerLookup = {};
    var HF = ele.type + ":" + ele.id;
    var El = this.listenerLookup[HF];
    if (!El) {
        El = {};
        this.listenerLookup[HF] = El;
    }
    if (El[type])
        throw "Unexpectedly found multiple El for event " + type + " on " + HF + ".";
    var bound = listener.bind(this);
    var Em;
    switch (type) {
        case 'mousedown':
            Em = [type, 'touchstart'];
            break;
        case 'mousemove':
            Em = [type, 'touchmove'];
            break;
        case 'mouseup':
            Em = [type, 'mouseout', 'touchend', 'touchcancel'];
            break;
        default:
            Em = [type];
    }
    for (var i = 0, c = Em.length; i < c; ++i) {
        El[Em[i]] = bound;
        ele.addEventListener(Em[i], bound);
    }
};
App.prototype.removeEvents = function(ele) {
    if (!ele) return;
    ele.disabled = true;
    var HF = ele.type + ":" + ele.id;
    if (!this.listenerLookup || !this.listenerLookup[HF])
        return;
    for (var type in this.listenerLookup[HF])
        ele.removeEventListener(type, this.listenerLookup[HF][type]);
    delete this.listenerLookup[HF];
};


App.prototype.resizeClient = function resizeClient() {
    if(document.getElementById("expand-button-icon").classList.contains("leftArrow")) {
        document.getElementById("expand-button-icon").classList.add("rightArrow")
        document.getElementById("expand-button-icon").classList.remove("leftArrow")
        document.getElementById("expand-button-icon").src = "assets/static/rightArrow.svg"

    }

    ipcRenderer.send("resizeClient", {width: this.canvas.width, height: this.canvas.height + 29});
}


App.prototype.resizeElements = function(sizeX, sizeY) {


    //Insert Start
    if (this.autoLoad["screendefinition"] == 1) {
        if (!sizeX) sizeX = this.game.applyScaleUp(960, true);
        if (!sizeY) sizeY = this.game.applyScaleUp(540, true);
    }
   //Insert End 
    else {
        if (!sizeX) sizeX = this.game.applyScaleUp(640, true);
        if (!sizeY) sizeY = this.game.applyScaleUp(480, true);
    }

    this.canvas.width = sizeX;
    this.canvas.height = sizeY;
    //modification to resize the client
    this.resizeClient()



};

App.prototype.prepForStart = function() {
    if (!this.game)
        return false;

    if (this.nameInput) {
        this.rememberPassword.disabled = true;
        this.reloadOnDeath.disabled = true;
        this.removeEvents(this.nameInput);
        this.removeEvents(this.passwordInput);
        this.removeEvents(this.loadButton);
        this.removeEvents(this.gameSize);
        this.removeEvents(this.fontSize);
    }

    var En = document.getElementById('start');
    if (En)
        En.style.display = 'none';
    return true;
};

App.prototype.tryStartingGame = function(username, password) {
    this.prepForStart();
    if (this.game.started)
        return;

    var rememberPassword = this.rememberPassword.checked;
    this.data.rememberPassword = rememberPassword;
    this.data.user = username;
    this.data.pwd = rememberPassword ? password : "";
    this.data.reloadOnDeath = this.reloadOnDeath.checked;
    localStorage.data = JSON.stringify(this.data);

    var scaling = this.getScaling(true),
        fontSize = this.getFontSize(true);
    if (!username)
        username = MD5(new Date().getTime().toString());
    this.game.run(username, password, scaling.up, scaling.down, fontSize,
        this.ipAddress, this.screenDefinition, this.encryptPassword,
        this.data.reloadOnDeath);
};

App.prototype.autoStartGame = function() {
    if (!this.prepForStart())
        return false;

    this.game.run(this.autoLoad.username, this.autoLoad.password,
        this.autoLoad.scaleup, this.autoLoad.scaledown,
        this.autoLoad.fontsize, this.autoLoad.ipaddress,
        this.autoLoad.screendefinition, this.autoLoad.encryptpassword,
        this.autoLoad.reloadOnDeath, this.autoLoad.javaversion);
    return true;
};

App.prototype.startSucceeded = function() {
    if (!window.autoLoad)
        sessionStorage.data = JSON.stringify(this.getSessionInfo());
};
App.prototype.getSessionInfo = function() {
    return {
        username: this.game.playerName,
        password: this.game.password,
        scaleup: this.game.scaleUp,
        scaledown: this.game.scaleDown,
        fontsize: this.game.fontSize,
        ipaddress: this.game.ipAddress,
        screendefinition: this.game.screenDefinition,
        encryptpassword: this.game.encryptPassword,
        reloadOnDeath: this.game.reloadOnDeath
    };
};

App.prototype.bindGuiEvents = function(inputsAllowed) {


    this.keysPressed = {};

    var Gb = document;
    if (this.screenkey) {
        this.screenkey.tabindex = 0;
        this.screenkey.focus();
        Gb = this.screenkey;
    }

    this.addEvent(window, 'blur', this.lostFocus);
    this.addEvent(Gb, 'keyup', this.keyUp);
    this.addEvent(Gb, 'keydown', this.keyDown);
    this.addEvent(this.canvas, 'contextmenu', this.doNothing);
    this.addEvent(this.canvas, 'mousedown', this.mouseDown);
    this.addEvent(this.canvas, 'mouseup', this.mouseUp);
    this.addEvent(this.canvas, 'mousemove', this.mouseMove);

    if (!this.speechTxt)
        return;

    this.dirSize = ~~(this.dirpad.width / 3);
    this.speechTxt.maxlength = 100;

    this.dirKeys = [
        [36, 38, 33],
        [37, 0, 39],
        [35, 40, 34]
    ];

    this.dirSrcs = [
        ['direction_up_left.png', 'direction_up.png', 'direction_up_right.png'],
        ['direction_left.png', 'direction_none.png', 'direction_right.png'],
        ['direction_down_left.png', 'direction_down.png', 'direction_down_right.png']
    ];

    var F0 = [
        'drop gold',
        'makecamp',
        'unfriendly',
        'friendly',
        'skills',
        'quests',
        'volume up',
        'volume down'
    ];
    if (!this.game.playerName || this.game.playerName.length > 10)
        F0.push('champion');
    var cmds = [
        'hide',
        'membership',
        'music up',
        'music down',
        'quest',
        'spells',
        'resistances',
        'rr',
        'infamy',
        'flipcoin',
        'sleep',
        'password',
        'allies',
        'unarchenemy',
        'vaulttrust',
        'drop hat',
        'drop right glove',
        'drop left glove',
        'drop right hand',
        'drop left hand',
        'drop belt',
        'drop right foot',
        'drop left foot',
        'drop all equipped',
        'say hello',
        'say goodbye',
        'say quest'
    ];
    F0.sort();
    cmds.sort();

    for (var i = 0, c = F0.length; i < c; ++i)
        this.addOption(this.cmdList, F0[i]);
    this.addOption(this.cmdList, '------------------', '', true);
    for (var i = 0, c = cmds.length; i < c; ++i)
        this.addOption(this.cmdList, cmds[i]);

    this.addEvent(this.dirpad, 'click', this.doNothing);
    this.addEvent(this.dirpad, 'mousedown', this.dirMouseDown);
    this.addEvent(this.dirpad, 'mouseup', this.dirMouseUp);
    this.addEvent(this.dirpad, 'mousemove', this.dirMouseMove);
    this.addEvent(this.atkBtn, 'click', this.doNothing);
    this.addEvent(this.atkBtn, 'mousedown', this.atkMouseDown);
    this.addEvent(this.atkBtn, 'mousemove', this.atkMouseMove);
    this.addEvent(this.atkBtn, 'mouseup', this.atkMouseUp);

    this.addEvent(this.cmdBtn, 'click', this.cmdBtnClick);
    this.addEvent(this.escBtn, 'click', this.escBtnClick);
    this.addEvent(this.speechTxt, 'keyup', this.speechKeyUp);

    this.cmdBtn.disabled = false;
    this.cmdList.disabled = false;
    this.speechTxt.disabled = false;
    this.escBtn.disabled = false;
    this.dirpad.disabled = false;
    this.atkBtn.disabled = false;
    this.dropper.disabled = false;
};

App.prototype.stop = function() {
    this.removeEvents(this.dirpad);
    this.removeEvents(this.atkBtn);
    this.removeEvents(this.cmdBtn);
    this.removeEvents(this.escBtn);
    this.removeEvents(this.speechTxt);
    this.storeSounds();
};

App.prototype.doNothing = function(event) {
    if (event && event.preventDefault)
        event.preventDefault();
    return false;
};
App.prototype.newGame = function() {
    var data = this.getSessionInfo();
    data.username = MD5(new Date().getTime().toString());
    data.password = '';
    sessionStorage.data = JSON.stringify(data);
    this.game.stop(true, true);
};
App.prototype.cmdBtnClick = function(event) {

    var txt = this.cmdList.value;
    if (txt) {
        if (txt.lastIndexOf('say ', 0) === 0)
            txt = txt.substring(4);
        this.speechTxt.value = txt;
        var active = document.activeElement;
        this.sayString();
        document.activeElement = active;
    }
};
App.prototype.speechKeyUp = function(e) {
    var result = false;
    var code = this.getKeyCode(e);
    switch (code) {
        case 13:
            this.sayString();
            this.screenkey.focus();
            break;
        case 27:
            this.escBtnClick();
            break;
        default:
            result = true;
            this.game.sendKeyCommand(
                this.Types.SpecialAction.ABOUT_TO_SPEAK,
                this.Types.KeyAction.SPECIAL_ACTION);
    }
    if (!result)
        event.preventDefault();
    return result;
};
App.prototype.escBtnClick = function(event) {
    this.game.sendKeyCommand(27, this.Types.KeyAction.KEY_PRESSED);
    this.game.sendKeyCommand(27, this.Types.KeyAction.KEY_RELEASED);
    this.speechTxt.value = '';
};
App.prototype.sayString = function() {
    var Gc = this.speechTxt.value;
    for (var i = 0, c = Gc.length; i < c; ++i)
        this.game.sendKeyCommand(Gc.charCodeAt(i), this.Types.KeyAction.SPECIAL_ACTION_BUFFER_SPEECH);
    this.game.sendKeyCommand(
        this.Types.SpecialAction.SPEAK_SPEECH_BUFFER,
        this.Types.KeyAction.SPECIAL_ACTION);
    this.speechTxt.value = '';
};

App.prototype.lostFocus = function(event) {

    if (!this.game.shuttingDown) {
        this.downEvent = null;
        this.outEvent = null;

        for (var code in this.keysPressed)
            this.game.sendKeyCommand(code, this.Types.KeyAction.KEY_RELEASED);
        this.keysPressed = {};
        this.game.sendKeyCommand(this.Types.SpecialAction.END_FIGHTING, this.Types.KeyAction.SPECIAL_ACTION);

        this.game.sendMouseCommandInner(this.Types.Misc.MAX_SUB_WINDOWS, 1, this.Types.MouseAction.MOUSE_RELEASED, 0, 0);
        this.game.sendMouseCommandInner(this.Types.Misc.MAX_SUB_WINDOWS, 2, this.Types.MouseAction.MOUSE_RELEASED, 0, 0);
    }

};
App.prototype.keyDown = function(event) {
    if (document.activeElement.tagName == "INPUT") {
        return;
    }
    var code = this.getKeyCode(event);
    if (code < this.Types.Misc.NUM_POSSIBLE_KEYS) {
        var press = !this.keysPressed[code];
        if (press) {
            this.keysPressed[code] = true;
            this.game.sendKeyCommand(code, this.Types.KeyAction.KEY_PRESSED);
        }

        if (press || code === 8) {
            var ascii = this.keyCode2Ascii(code, event.shiftKey);
            if (ascii)
                this.game.sendKeyCommand(ascii, this.Types.KeyAction.KEY_TYPED);
        }
    }

    return this.doNothing(event);
};
App.prototype.keyUp = function(event) {

    var code = this.getKeyCode(event);
    if (code < this.Types.Misc.NUM_POSSIBLE_KEYS && this.keysPressed[code]) {
        delete this.keysPressed[code];
        this.game.sendKeyCommand(code, this.Types.KeyAction.KEY_RELEASED);
    }

    return this.doNothing(event);
};
App.prototype.mouseDown = function(event) {
    
    //if input is enabled, allow user to click canvas to escape the input
    if (document.activeElement.tagName == "INPUT") {
        return;
    }


    if (this.screenkey)
        this.screenkey.focus();
    this.setMouseCoordinates(event, this.canvas, this.mouse);
    var je = this.getJavaMouseEvent(event);
    var winId = this.game.sendMouseCommand(je, this.Types.MouseAction.MOUSE_PRESSED, this.dropper && this.dropper.checked);
    if (je.button === 1) {
        this.downEvent = je;
        this.outEvent = null;
        this.downWin = winId;
        je.time = new Date().getTime();
    }


    return this.doNothing(event);
};
App.prototype.mouseUp = function(event) {


    this.setMouseCoordinates(event, this.canvas, this.mouse);
    var je = event === this.downEvent ?
        event :
        this.getJavaMouseEvent(event, !this.downEvent);
    if (je.button === 1)
        this.downEvent = null;
    this.game.sendMouseCommand(je, this.Types.MouseAction.MOUSE_RELEASED);


    return this.doNothing(event);
};
App.prototype.mouseMove = function(event) {


    if (this.setMouseCoordinates(event, this.canvas, this.mouse)) {
        if (event.type === 'touchmove' && !this.downWin) {
            if (this.outEvent) {

                this.downEvent = this.outEvent;
                this.outEvent = null;
            }
            if (this.downEvent) {
                var now = new Date().getTime();
                if (now - this.downEvent.time > 70) {
                    this.game.sendMouseCommandInner(0, 1,
                        this.Types.MouseAction.MOUSE_RELEASED, this.downEvent.x,
                        this.downEvent.y);
                    this.game.sendMouseCommandInner(0, 1,
                        this.Types.MouseAction.MOUSE_PRESSED, this.mouse.x,
                        this.mouse.y);
                    this.downEvent.x = this.mouse.x;
                    this.downEvent.y = this.mouse.y;
                    this.downEvent.time = now;
                }
            }
        }
    } else if (this.downEvent) {

        this.outEvent = this.downEvent;
        this.mouseUp(this.downEvent);
    }


    return this.doNothing(event);
};

App.prototype.dirMouseDown = function(event) {

    var je = this.getJavaMouseEvent(event);
    if (je.button === 1) {
        this.dirDown = true;
    }
    return this.dirDown ? this.dirMouseMove(event) : this.doNothing(event);
};
App.prototype.dirMouseMove = function(event) {

    var FD = this.setMouseCoordinates(event, this.dirpad, this.dirmouse);
    if (!FD) {
        this.adjustDirKeys(1, 1);
    } else if (this.dirDown) {
        this.considerArrowKey();
    }
    return this.doNothing(event);
};
App.prototype.dirMouseUp = function(event) {

    this.dirDown = false;
    this.adjustDirKeys(1, 1);
    return this.doNothing(event);
};

App.prototype.atkMouseDown = function(event) {

    var je = this.getJavaMouseEvent(event);
    if (je.button === 1) {
        this.atkDown = true;
    }
    return this.atkDown ? this.atkMouseMove(event) : this.doNothing(event);
};
App.prototype.atkMouseMove = function(event) {

    var FD = this.setMouseCoordinates(event, this.atkBtn, this.atkmouse);
    if (!FD && this.attacking) {
        this.attacking = false;
        this.game.sendKeyCommand(this.Types.SpecialAction.END_FIGHTING, this.Types.KeyAction.SPECIAL_ACTION);
        this.atkBtn.src = "./img/attack_released.png";
    } else if (FD && !this.attacking && this.atkDown) {
        this.attacking = true;
        this.game.sendKeyCommand(this.Types.SpecialAction.BEGIN_FIGHTING, this.Types.KeyAction.SPECIAL_ACTION);
        this.atkBtn.src = "./img/attack_pressed.png";
    }
    return this.doNothing(event);
};
App.prototype.atkMouseUp = function(event) {

    this.atkDown = false;
    this.attacking = false;
    this.game.sendKeyCommand(this.Types.SpecialAction.END_FIGHTING, this.Types.KeyAction.SPECIAL_ACTION);
    this.atkBtn.src = "./img/attack_released.png";
    return this.doNothing(event);
};

App.prototype.adjustDirKeys = function(FN, FM) {
    var FJ = false;
    var FK = this.dirKeys[FM][FN];
    for (var i = 0; i < 3; ++i) {
        for (var j = 0; j < 3; ++j) {
            var code = this.dirKeys[j][i];
            if (!this.keysPressed[code]) {} else if (code === FK) {
                FJ = true;
            } else {
                delete this.keysPressed[code];
                this.game.sendKeyCommand(code, this.Types.KeyAction.KEY_RELEASED);
            }
        }
    }
    if (FK && !FJ) {
        this.keysPressed[FK] = true;
        this.game.sendKeyCommand(FK, this.Types.KeyAction.KEY_PRESSED);
    }
    var src = "/img/" + this.dirSrcs[FM][FN];
    if (this.dirpad.src.indexOf(src, !this.dirpad.src.length - src.length) === -1) {
        this.dirpad.src = "." + src;
    }
};
App.prototype.considerArrowKey = function() {
    var FL = 0;
    if (this.dirmouse.x < this.dirSize) {
        FL += 3;
    } else if (this.dirmouse.x >= 2 * this.dirSize) {
        FL += 6;
    }
    if (this.dirmouse.y < this.dirSize) {
        ++FL;
    } else if (this.dirmouse.y > 2 * this.dirSize) {
        FL += 2;
    }
    var FN = ~~(this.dirmouse.x / this.dirSize);
    var FM = ~~(this.dirmouse.y / this.dirSize);
    this.adjustDirKeys(FN, FM);
};
App.prototype.getJavaMouseEvent = function(event, FP) {

    var je = {
        x: this.mouse.x,
        y: this.mouse.y
    };
    if (FP) {
        je.button = 3;
    } else if (!event.button) {
        je.button = 1;
    } else if (event.button === 2) {
        je.button = 3;
    } else {
        je.button = event.button;
    }
    return je;
};

App.prototype.setMouseCoordinates = function(event, ele, mouse) {
    var evt = event;

    if (evt.changedTouches && evt.changedTouches.length) {
        evt = evt.changedTouches[0];
    } else if (evt.touches && evt.touches.length) {
        evt = evt.touches[0];
    }

    if (evt.pageX || evt.pageX === 0) {
        mouse.x = evt.pageX - ele.offsetLeft - ele.clientLeft;
        mouse.y = evt.pageY - ele.offsetTop - ele.clientTop;

        mouse.FD = 0 <= mouse.x && mouse.x < ele.width &&
            0 <= mouse.y && mouse.y < ele.height;
    }
    return mouse.FD;
};

App.prototype.getKeyCode = function(e) {
    if (!this.keySubs) {
        this.keySubs = {
            59: 186,
            61: 187,
            173: 189
        };
    }
    var code = e.which;
    if (this.keySubs[code])
        code = this.keySubs[code];
    return code;
};
App.prototype.keyCode2Ascii = function(keyCode, shift) {
    if (!this.key2Ascii) {
        this.key2Ascii = {
            8: 8,
            9: 9,
            13: 10,
            27: 27,
            32: 32,
            46: 127,
            48: 48,
            49: 49,
            50: 50,
            51: 51,
            52: 52,
            53: 53,
            54: 54,
            55: 55,
            56: 56,
            57: 57,
            65: 97,
            66: 98,
            67: 99,
            68: 100,
            69: 101,
            70: 102,
            71: 103,
            72: 104,
            73: 105,
            74: 106,
            75: 107,
            76: 108,
            77: 109,
            78: 110,
            79: 111,
            80: 112,
            81: 113,
            82: 114,
            83: 115,
            84: 116,
            85: 117,
            86: 118,
            87: 119,
            88: 120,
            89: 121,
            90: 122,
            96: 48,
            97: 49,
            98: 50,
            99: 51,
            100: 52,
            101: 53,
            102: 54,
            103: 55,
            104: 56,
            105: 57,
            106: 42,
            107: 43,
            109: 45,
            110: 46,
            111: 47,
            186: 59,
            187: 61,
            188: 44,
            189: 45,
            190: 46,
            191: 47,
            192: 96,
            219: 91,
            220: 92,
            221: 93,
            222: 39
        };

        this.shift2Ascii = {
            8: 8,
            9: 9,
            13: 10,
            27: 27,
            32: 32,
            46: 127,
            48: 41,
            49: 33,
            50: 64,
            51: 35,
            52: 36,
            53: 37,
            54: 94,
            55: 38,
            56: 42,
            57: 40,
            65: 65,
            66: 66,
            67: 67,
            68: 68,
            69: 69,
            70: 70,
            71: 71,
            72: 72,
            73: 73,
            74: 74,
            75: 75,
            76: 76,
            77: 77,
            78: 78,
            79: 79,
            80: 80,
            81: 81,
            82: 82,
            83: 83,
            84: 84,
            85: 85,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            90: 90,
            96: 48,
            97: 49,
            98: 50,
            99: 51,
            100: 52,
            101: 53,
            102: 54,
            103: 55,
            104: 56,
            105: 57,
            106: 42,
            107: 43,
            109: 45,
            110: 46,
            111: 47,
            186: 58,
            187: 43,
            188: 60,
            189: 95,
            190: 62,
            191: 63,
            192: 126,
            219: 123,
            220: 124,
            221: 125,
            222: 34
        };
    }

    if (shift) {
        return this.shift2Ascii[keyCode];
    } else {
        return this.key2Ascii[keyCode];
    }

};
var GameClientRef;

function GameClient(app) {
    

    this.app = app;
    this.preCanvas = document.createElement("canvas");

    //intialize click listeners for elements containing each mod in the menu list
    this.modHandler();

    //initalize variables needed for autoFollow module
    this.target = "";
    this.autoFollowBool = false;
    this.autoAttackInterval = null;
    this.lookForTargetInterval = null;
    this.lookForPotionInterval = null;
    this.pickupPotionBool = false;
    this.attacking = false;
    

    var b = document.location.href;
    var c = b.indexOf('/', 8);
    if (c >= 0)
        b = b.substring(0, c);
    this.resourceUrlBase = "https://aberoth.com/resource/"
    this.globalResourceCache = {};

    try {
        if (window.AudioContext)
            this.audioContext = new AudioContext();
    } catch (e) {
        this.audioContext = null;
    }


    var FY = new Audio();
    var FZ = FY.canPlayType('audio/ogg').length;
    var Fa = FY.canPlayType('audio/mp3').length;
    this.audioExt = Fa > FZ ? '.mp3' : '.ogg';


    this.lastFrameBacklogSent = 0;
    this.backlog = null;
    this.whereInCommand = 0;
    this.commandType = null;
    this.numSubCommands = 0;
    this.subCommandIndex = null;

    this.playerName = null;
    this.password = null;

    this.shuttingDown = false;
    this.windowId = null;
    this.activeSubWindow = null;
    this.repaintSmallX = 0;
    this.repaintSmallY = 0;
    this.repaintBigX = 0;
    this.repaintBigY = 0;

    this.posX = 0;
    this.posY = 0;

    this.font = null;
    this.fontSize = null;
    this.fonts = [];
    this.scaleUp = null;
    this.scaleDown = null;

    this.scrollingDown = false;
    this.scrollingRight = false;
    this.totalCopyDx = 0;
    this.totalCopyDy = 0;

    this.context = app.canvas.getContext("2d");
    this.context.fillStyle = "rgba(0,0,0,1)";
    this.disableImageSmoothing(this.context);
    this.context.save();
    this.preContext = this.preCanvas.getContext("2d");
    this.disableImageSmoothing(this.preContext);

    this.ipAddress = app.ipAddress;
    this.screenDefinition = app.screenDefinition;
    this.encryptPassword = app.encryptPassword;

    var C8 = new Uint8Array(new ArrayBuffer(6));
    this.statusMix = new DataView(C8.buffer);
    C8[0] = this.Types.Compression.NOT_COMPRESSED_FLAG;
    C8[1] = 0;
    C8[2] = 3;
    C8[3] = this.Types.ClientServerMessage.CLIENT_STATUS;

    this.keyBytes = new Uint8Array(new ArrayBuffer(11));
    this.keyBytes[0] = this.Types.Compression.NOT_COMPRESSED_FLAG;
    this.keyBytes[1] = 0;
    this.keyBytes[2] = 8;
    this.keyBytes[3] = this.Types.ClientServerMessage.USER_INPUT;
    this.keyBytes[4] = this.windowId;
    this.keyBytes[5] = 0;
    this.keyBytes[6] = 0;
    this.keyBytes[7] = 1;
    this.keyBytes[8] = 16;

    this.mouseBytes = new Uint8Array(new ArrayBuffer(16));
    this.mouseMix = new DataView(this.mouseBytes.buffer);
    this.mouseBytes[0] = this.Types.Compression.NOT_COMPRESSED_FLAG;
    this.mouseBytes[1] = 0;
    this.mouseBytes[2] = 13;
    this.mouseBytes[3] = this.Types.ClientServerMessage.USER_INPUT;
    this.mouseBytes[4] = this.windowId;
    this.mouseBytes[5] = 0;
    this.mouseBytes[6] = 0;
    this.mouseBytes[7] = 1;
    this.mouseBytes[8] = 19;
    GameClientRef = this;
    GameClientRef.clientIsDeskTop = false;
}

//DeskClientRepaintingScene was added After old client was minified
function DeskClientRepaintingScene(currentTime) {
    if (GameClientRef.clientIsDeskTop) {


        GameClientRef.repaintScene();
        GameClientRef.clientIsDeskTop = false;
    }
    window.requestAnimationFrame(DeskClientRepaintingScene);
}

GameClient.prototype.Types = {

    ClientServerMessage: {
        FRAME_RECEIVED: 13,
        USER_INPUT: 14,
        CLIENT_STATUS: 22
    },

    ServerClientMessage: {
        ONE_FRAME_WITH_INFO: 12,
        CREATE_WINDOW: 20,
        ONE_FRAME_NO_INFO: 23
    },

    FrameCommands: {
        DRAW_FILLED_RECT_AT_Y_PLUS_ONE: 0,
        DRAW_FILLED_RECT_AT_BLOCK_XY: 1,
        DRAW_FILLED_RECT_AT_DY: 2,
        DRAW_FILLED_RECT_AT_X_PLUS_ONE: 3,
        DRAW_FILLED_RECT_AT_DX: 4,
        DRAW_FILLED_RECT_AT_XY: 5,
        SET_COLOR: 6,
        CACHE_CURRENT_COLOR: 7,
        SET_ON_SCREEN_TEXT: 8,
        MOVE_ON_SCREEN_TEXT: 9,
        DRAW_PIXEL: 18,
        COPY_AREA: 21,
        SUB_WINDOW: 24,
        SET_FILLED_RECT_SIZE: 25,
        USE_GLOBAL_RESOURCE: 26,
        DRAW_FILLED_RECT_AT_Y_PLUS_ONE_REPEAT: 27,
        SET_COLOR_BASED_ON_CACHE: 28,
        SET_COLOR_WITH_ALPHA: 29,

        COLOR_CACHE_COMMANDS_START: 30,
        COLOR_CACHE_COMMANDS_STOP: 256

    },

    SubWindowId: {
        MAIN_WINDOW_ID: 0,
        HIT_POINTS_WINDOW_ID: 1
    },

    Compression: {
        NOT_COMPRESSED_FLAG: 255
    },

    Font: {
        PLAIN_TEXT: 0,
        ITALIC: 1,
        BOLD: 2,
        SMALL: 3,
        NUM_FONTS: 4
    },

    OnScreenTextCode: {
        CLEAR_ALL_ON_SCREEN_TEXT: 0,
        ID_STATS_IN_LOWER_LEFT_WHITE: 2,
        ID_HINTS_IN_LOWER_LEFT_YELLOW: 3,
        ID_BROADCAST_MESSAGE: 4,
        ID_STATUS_IN_UPPER_LEFT_WHITE: 65001,

        CENTER_OF_SCREEN_Y: 65535
    },

    SubWindowAction: {
        CREATE_SUB_WINDOW: 0,
        SWITCH_TO_SUB_WINDOW: 1,
        SWITCH_BACK_TO_PREVIOUS_WINDOW: 2,
        DESTROY_SUB_WINDOW: 3
    },

    ResourceType: {

        RESOURCE_TYPE_IMAGE_NO_DATA: 0,
        RESOURCE_TYPE_PNG: 1,

        RESOURCE_TYPE_SOUND_EFFECT_NO_DATA: 2,
        RESOURCE_TYPE_SOUND_EFFECT: 3,
        RESOURCE_TYPE_MOVE_SOUND_EFFECT: 4,

        RESOURCE_TYPE_IMAGE_RAW: 5,
        RESOURCE_TYPE_STOP_SOUND_EFFECT: 6,

        IJ: 10
    },

    BandwidthCheck: {
        PING_ID_BANDWIDTH_CHECK_LOW: 1,
        PING_ID_BANDWIDTH_CHECK_HIGH: 3
    }
};

GameClient.prototype.setGameAndFontSize = function setGameAndFontSize(scaleUp, scaleDown, fontSize) {
    if (this.connection) return;

    if (scaleUp != this.scaleUp || scaleDown != this.scaleDown) {
        this.scaleUp = scaleUp;
        this.scaleDown = scaleDown;
        this.app.resizeElements();
        this.sizeX =
            this.preCanvas.width = this.app.canvas.width;
        this.sizeY =
            this.preCanvas.height = this.app.canvas.height;

        this.context.fillRect(0, 0, this.sizeX, this.sizeY);
        this.preContext.clearRect(0, 0, this.sizeX, this.sizeY);
    }
    if (fontSize != this.fontSize) {
        this.fontSize = fontSize;
        for (var i = this.Types.Font.NUM_FONTS - 1; i >= 0; --i)
            this.fonts[i] = this.getFontMetrics(i);
        this.font = this.fonts[this.Types.Font.PLAIN_TEXT];
    }
};

GameClient.prototype.getFontMetrics = function getFontMetrics(styleCode) {
    var style = null,
        size = this.fontSize;
    switch (styleCode) {
        case this.Types.Font.PLAIN_TEXT:
            break;
        case this.Types.Font.ITALIC:
            style = "italic";
            break;
        case this.Types.Font.BOLD:
            style = "bold";
            break;
        case this.Types.Font.SMALL:
            style = null;
            size -= Math.max(Math.round(size * 0.2), 1);
            break;
        default:

    }
    var Fl = size.toString() + "px sans-serif";
    if (style)
        Fl = style + " " + Fl;

    this.preContext.font = Fl;
    var He = Math.ceil(1.1 * this.preContext.measureText("M").width);
    var Hf = Math.ceil(He / 4);
    var result = {
        asString: Fl,
        ascent: He,
        descent: Hf,
        height: He + Hf + 1,
        measureText: function(txt, ctx) {
            ctx.font = this.asString;
            return ctx.measureText(txt).width;
        }
    };
    return result;
};

GameClient.prototype.run = function run(name, pwd, scaleUp, scaleDown, fontSize, ipAddress, screenDefinition, encryptPassword, reloadOnDeath, javaVersion) {
    this.playerName = name;
    this.password = pwd;
    this.setGameAndFontSize(scaleUp, scaleDown, fontSize);
    this.ipAddress = ipAddress;
    this.screenDefinition = screenDefinition;
    this.encryptPassword = encryptPassword;
    this.reloadOnDeath = reloadOnDeath;
    this.javaVersion = javaVersion;
    if (javaVersion == "js_mobile") {
        this.clientIsMobileClient = true;
    } else {
        this.clientIsMobileClient = false;
    }

    this.setOnScreenMessage("");

    this.connection = new Connection(this);
    this.backlog = new Queue();
    this.whereInCommand = 0;

    this.connection.createSocket();
};

GameClient.prototype.onServerMessage = function onServerMessage(serverMessage) {
    if (this.shuttingDown) { 
        app.sessionActive = false;
        return;
    };


    try {
        app.sessionActive = true;
        var Db = 0;
        while (Db < serverMessage.length) {
            if (serverMessage.length < Db + 3) {

                break;
            }

            var length = 0;
            var Hd = true;
            var big = serverMessage[Db];
            var Hm = serverMessage[Db + 1];
            var small = serverMessage[Db + 2];

            if (big === this.Types.Compression.NOT_COMPRESSED_FLAG) {
                Hd = false;
                big = 0;
            }

            length = big;
            length *= 256;
            length += Hm;
            length *= 256;
            length += small;

            if (serverMessage.length < Db + 3 + length) {

                break;
            }

            var Fd = this.backlog.getLength();

            if (this.soundChanged &&
                Fd < 3 &&
                Fd <= this.lastFrameBacklogSent &&
                this.getTimestamp() - this.lastSoundStore > 300) {
                this.app.storeSounds();
            }


            var Fe = Fd != this.lastFrameBacklogSent;

            if (Fe) {
                this.statusMix.setUint16(4, Fd, false);
                this.connection.sendData(this.statusMix.buffer, "frameBacklog");
                this.lastFrameBacklogSent = Fd;
            }

            var Gf = new Uint8Array(serverMessage.buffer, Db + 3, length);
            var Gg = Hd ? (new Zlib.Inflate(Gf)).decompress(Gf) : Gf;
            if (Gg && Gg.length > 0) {
                this.backlog.enqueue({
                    bytes: Gg,
                    mix: new DataView(Gg.buffer, Gg.byteOffset)
                });
                if (this.backlog.getLength() == 1)
                    setTimeout(this.processServerCommand.bind(this), 0);
            }

            Db += 3 + length;
        }
    } catch (error) {

        this.stop();
        throw error;
    }

};

GameClient.prototype.processServerCommand = function processServerCommand() {
    if (this.shuttingDown) return;


    try {
        switch (this.backlog.peek().bytes[0]) {
            case this.Types.ServerClientMessage.CREATE_WINDOW:
                this.onCreateWindowMessage();
                break;
            case this.Types.ServerClientMessage.ONE_FRAME_WITH_INFO:
            case this.Types.ServerClientMessage.ONE_FRAME_NO_INFO:
                this.onOneFrameMessage();
                break;
            default:

        }
    } catch (error) {

        this.stop();
        throw error;
    }

};

GameClient.prototype.onCreateWindowMessage = function onCreateWindowMessage() {

    var Ge = this.backlog.peek();
    var data = Ge.bytes;
    var mix = Ge.mix;

    var where = 1;
    this.windowId = data[where];
    ++where;
    this.title = this.stringFromLengthString(Ge, where);
    where += this.title.length + 2;
    this.sizeX = this.intFromTwoCharString(mix, where);
    where += 2;
    this.sizeY = this.intFromTwoCharString(mix, where);
    where += 2;
    if (data[where] !== 2)
        throw "Unexpected input request from server.";

    this.allSubWindows = [];
    this.largestValidSubwindowId = 0;
    this.previousSubWindowId = 0;
    this.lastFrameBacklogSent = 0;

    this.sizeX = this.applyScaleUp(this.sizeX, true);
    this.sizeY = this.applyScaleUp(this.sizeY, true);
    this.app.resizeElements(this.sizeX, this.sizeY);

    var Gx = new SubWindow(this, this.Types.SubWindowId.MAIN_WINDOW_ID, 0, 0, this.sizeX, this.sizeY);

    this.allSubWindows[Gx.id] = Gx;
    if (Gx.id > this.largestValidSubwindowId) this.largestValidSubwindowId = Gx.id;
    this.activeSubWindow = Gx;

    this.colorCache = [];

    this.onScreenMessage = null;

    this.recalculateEntireScreenSize();

    this.repaintSmallX = this.entireScreenSizeX;
    this.repaintSmallY = this.entireScreenSizeY;
    this.repaintBigX = 0;
    this.repaintBigY = 0;

    this.lastSoundStore = this.getTimestamp();

    this.app.bindGuiEvents();

    this.considerNextFrame();

};

GameClient.prototype.considerNextFrame = function considerNextFrame() {
    this.backlog.dequeue();
    if (this.backlog.getLength() !== 0) {
        setTimeout(this.processServerCommand.bind(this), 0);
    } else if (this.connection.cleanCloseInitiated) {
        this.stop();
    }
};

GameClient.prototype.onOneFrameMessage = function onOneFrameMessage() {

    try {
        if (this.clientIsMobileClient) {
            var EW = new Date().getTime();
        }
        var Ge = this.backlog.peek();
        var data = Ge.bytes;
        var mix = Ge.mix;

        if (this.whereInCommand === 0) {
            this.commandType = data[this.whereInCommand];
            ++this.whereInCommand;
            this.numSubCommands = this.intFromThreeCharString(mix, this.whereInCommand);
            this.subCommandIndex = -1;
            this.whereInCommand += 3;

        }

        while (++this.subCommandIndex < this.numSubCommands) {
            var IN = data[this.whereInCommand];

            try {

                switch (IN) {
                    case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_Y_PLUS_ONE:
                    case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_X_PLUS_ONE:
                    case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_DY:
                    case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_DX:
                    case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_XY:
                    case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_BLOCK_XY:
                    case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_Y_PLUS_ONE_REPEAT:

                        var Gi = 1;
                        var DY = 0,
                            Gh = 0;
                        switch (IN) {
                            case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_Y_PLUS_ONE:
                                Gh = 1;
                                ++this.whereInCommand;
                                break;
                            case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_X_PLUS_ONE:
                                DY = 1;
                                ++this.whereInCommand;
                                break;
                            case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_DY:

                                Gh = data[this.whereInCommand + 1];
                                this.whereInCommand += 2;
                                break;
                            case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_DX:

                                DY = data[this.whereInCommand + 1];
                                this.whereInCommand += 2;
                                break;
                            case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_XY:

                                this.posX = this.intFromTwoCharString(mix, this.whereInCommand + 1);
                                this.posY = this.intFromTwoCharString(mix, this.whereInCommand + 3);
                                this.whereInCommand += 5;
                                break;
                            case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_BLOCK_XY:

                                this.posX = data[this.whereInCommand + 1] * this.activeSubWindow.fillRectSizeX;
                                this.posY = data[this.whereInCommand + 2] * this.activeSubWindow.fillRectSizeY;
                                this.whereInCommand += 3;
                                break;
                            case this.Types.FrameCommands.DRAW_FILLED_RECT_AT_Y_PLUS_ONE_REPEAT:

                                Gh = 1;
                                Gi = data[this.whereInCommand + 1];
                                this.whereInCommand += 2;
                                break;
                            default:

                                ++this.whereInCommand;
                                break;
                        }

                        if (Gh != 0)
                            this.posY += Gh * this.activeSubWindow.fillRectSizeY;
                        if (DY != 0)
                            this.posX += DY * this.activeSubWindow.fillRectSizeX;

                        this.drawFilledRect(
                            this.posX, this.posY,
                            this.activeSubWindow.fillRectSizeX,
                            this.activeSubWindow.fillRectSizeY * Gi,
                            this.activeSubWindow.drawExtraXWhenScaling,
                            this.activeSubWindow.drawExtraYWhenScaling);


                        if (Gh != 0 && Gi > 1)
                            this.posY += Gh * this.activeSubWindow.fillRectSizeY * (Gi - 1);


                        break;

                    case this.Types.FrameCommands.SET_COLOR:

                        var color = this.getRgbaString(data[this.whereInCommand + 1], data[this.whereInCommand + 2], data[this.whereInCommand + 3], 1);
                        this.activeSubWindow.setColor(color);
                        this.whereInCommand += 4;
                        break;
                    case this.Types.FrameCommands.SET_COLOR_WITH_ALPHA:

                        var color = this.getRgbaString(data[this.whereInCommand + 1], data[this.whereInCommand + 2], data[this.whereInCommand + 3], data[this.whereInCommand + 4] / 255.0);
                        this.activeSubWindow.setColor(color);
                        this.whereInCommand += 5;
                        break;
                    case this.Types.FrameCommands.SET_COLOR_BASED_ON_CACHE:

                        var Gj = data[this.whereInCommand + 1];
                        var Gk = data[this.whereInCommand + 2];
                        var Gl = this.colorCache[Gj];
                        var Gm = (Gk >> 5) - 4;
                        var Gn = ((Gk & 31) >> 2) - 4;
                        var Go = (Gk & 3) - 2;
                        var color = this.getRgbaString(Gl.r + Gm, Gl.g + Gn, Gl.b + Go, 1);
                        this.activeSubWindow.setColor(color);
                        this.whereInCommand += 3;
                        break;
                    case this.Types.FrameCommands.CACHE_CURRENT_COLOR:

                        var Gj = data[this.whereInCommand + 1];
                        var rgba = this.activeSubWindow.getColor();
                        var Gp = rgba.substring(5, rgba.length - 1).split(",");
                        var color = {
                            r: ~~Gp[0],
                            g: ~~Gp[1],
                            b: ~~Gp[2],
                            a: Gp[3]
                        };
                        this.colorCache[Gj] = color;
                        this.whereInCommand += 2;
                        break;
                    case this.Types.FrameCommands.SET_FILLED_RECT_SIZE:

                        this.activeSubWindow.fillRectSizeX = this.intFromTwoCharString(mix, this.whereInCommand + 1);
                        this.activeSubWindow.fillRectSizeY = this.intFromTwoCharString(mix, this.whereInCommand + 3);
                        var DX = data[this.whereInCommand + 5];
                        this.activeSubWindow.drawExtraXWhenScaling = (DX & 0x0001) != 0;
                        this.activeSubWindow.drawExtraYWhenScaling = (DX & 0x0002) != 0;
                        this.whereInCommand += 6;
                        break;
                    case this.Types.FrameCommands.DRAW_PIXEL:
                        this.drawFilledRect(
                            this.intFromTwoCharString(mix, this.whereInCommand + 1),
                            this.intFromTwoCharString(mix, this.whereInCommand + 3),
                            1, 1, true, true);
                        this.whereInCommand += 5;
                        break;
                    case this.Types.FrameCommands.SET_ON_SCREEN_TEXT:
                    case this.Types.FrameCommands.MOVE_ON_SCREEN_TEXT:
                        this.onTextCommand();
                        break;
                    case this.Types.FrameCommands.SUB_WINDOW:
                        this.onSubWindowCommand();
                        break;
                    case this.Types.FrameCommands.USE_GLOBAL_RESOURCE:
                        this.onUseGlobalResourceCommand();
                        break;
                    case this.Types.FrameCommands.COPY_AREA:
                        this.onCopyAreaCommand();
                        break;
                    default:

                        if (IN < this.Types.FrameCommands.COLOR_CACHE_COMMANDS_START ||
                            IN >= this.Types.FrameCommands.COLOR_CACHE_COMMANDS_STOP) {
                            throw "Unexpected server-client command code: " + IN;
                        }
                        var Gj = data[this.whereInCommand] - this.Types.FrameCommands.COLOR_CACHE_COMMANDS_START;
                        var color = this.colorCache[Gj];
                        if (color) {
                            var rgba = this.getRgbaString(color.r, color.g, color.b, color.a);
                            this.activeSubWindow.setColor(rgba);
                        }
                        ++this.whereInCommand;
                        break;
                }


                if (this.clientIsMobileClient) {
                    var deltaMs = new Date().getTime() - EW;
                    if (deltaMs > 13) {

                        setTimeout(this.onOneFrameMessage.bind(this), 0);
                        return;
                    }
                }
            } catch (error) {

                throw error;
            }
        }


        try {
            if (this.commandType === this.Types.ServerClientMessage.ONE_FRAME_WITH_INFO) {

                var IK = data[this.whereInCommand + 3];
                var IL = IK != 0;

                if (IL) {

                    var IM = 0;
                    if (IK >= this.Types.BandwidthCheck.PING_ID_BANDWIDTH_CHECK_LOW &&
                        IK <= this.Types.BandwidthCheck.PING_ID_BANDWIDTH_CHECK_HIGH) {
                        IM = 1024 << (IK - this.Types.BandwidthCheck.PING_ID_BANDWIDTH_CHECK_LOW);
                    }

                    var innerSize = 5 + IM;

                    if (innerSize > 256 * 256 - 1)
                        innerSize = 256 * 256 - 1;

                    var ackBuf = new ArrayBuffer(3 + innerSize);
                    var ackData = new Uint8Array(ackBuf);
                    var ackMix = new DataView(ackBuf);
                    ackData[0] = this.Types.Compression.NOT_COMPRESSED_FLAG;
                    ackMix.setUint16(1, innerSize, false);
                    ackData[3] = this.Types.ClientServerMessage.FRAME_RECEIVED;
                    ackData[4] = data[this.whereInCommand];
                    ackData[5] = data[this.whereInCommand + 1];
                    ackData[6] = data[this.whereInCommand + 2];
                    ackData[7] = IK;
                    for (var i = ackData.length - 1; i > 7; --i) {
                        ackData[i] = ~~(Math.random() * 256);
                    }

                    this.connection.sendToServer(ackData, "frameAck");
                    this.whereInCommand += 4;
                }

            }
        } catch (error) {

            throw error;
        }

        var neat = this.whereInCommand == data.length;


        this.checkClientThenRepaint();


        this.whereInCommand = 0;
        this.considerNextFrame();

    } catch (error) {

        this.stop();
    }

};

GameClient.prototype.onCopyAreaCommand = function onCopyAreaCommand() {
    var Ge = this.backlog.peek();
    var data = Ge.bytes;
    var mix = Ge.mix;

    var x = this.intFromTwoCharString(mix, this.whereInCommand + 1);
    var y = this.intFromTwoCharString(mix, this.whereInCommand + 3);
    var width = this.intFromTwoCharString(mix, this.whereInCommand + 5);
    var height = this.intFromTwoCharString(mix, this.whereInCommand + 7);
    var dx = this.intFromTwoCharString(mix, this.whereInCommand + 9);
    var dy = this.intFromTwoCharString(mix, this.whereInCommand + 11);

    if (data[this.whereInCommand + 13] != 0) dx = -dx;
    if (data[this.whereInCommand + 14] != 0) dy = -dy;

    x = this.applyScaleUp(x, false);
    y = this.applyScaleUp(y, false);
    width = this.applyScaleUp(width, false);
    height = this.applyScaleUp(height, false);

    this.totalCopyDx += dx;
    this.totalCopyDy += dy;

    dx = this.applyScaleUp(dx, false);
    dy = this.applyScaleUp(dy, false);

    if (this.needsSpecialScaling()) {
        if (dx < 0) {
            this.scrollingRight = true;
        } else {
            this.scrollingRight = false;
        }
        if (dy < 0) {
            this.scrollingDown = true;
        } else {
            this.scrollingDown = false;
        }

        if (this.totalCopyDx * this.scaleUp % this.scaleDown != 0) {
            if (dx > 0) dx++;
            if (dx < 0) dx--;
        }
        if (this.totalCopyDy * this.scaleUp % this.scaleDown != 0) {
            if (dy > 0) dy++;
            if (dy < 0) dy--;
        }
    }

    this.activeSubWindow.copyArea(x, y, width, height, dx, dy);
    this.updatePaintArguments(x + dx + this.activeSubWindow.x, y + dy + this.activeSubWindow.y, width, height);

    this.whereInCommand += 15;
};

GameClient.prototype.needsSpecialScaling = function needsSpecialScaling() {
    return this.activeSubWindow.fillRectSizeX == 2 && this.scaleDown == 4 && (this.scaleUp == 3 || this.scaleUp == 5 || this.scaleUp == 7);
};



GameClient.prototype.onTextCommand = function onTextCommand() {
    var Ge = this.backlog.peek();
    var data = Ge.bytes;
    var mix = Ge.mix;

    var IN = data[this.whereInCommand];
    var id = this.intFromTwoCharString(mix, this.whereInCommand + 1);
    var x = this.intFromTwoCharString(mix, this.whereInCommand + 3);
    var y = this.intFromTwoCharString(mix, this.whereInCommand + 5);
    var HR = data[this.whereInCommand + 7];
    this.whereInCommand += 8;

    var text = null,
        specialAttributes = null;
    if (IN === this.Types.FrameCommands.SET_ON_SCREEN_TEXT) {

        specialAttributes = data[this.whereInCommand];
        var fontFaceId = data[this.whereInCommand + 1];
        text = this.stringFromLengthString(Ge, this.whereInCommand + 2);
        this.whereInCommand += text.length + 4;
    }

    if (id === this.Types.OnScreenTextCode.ID_BROADCAST_MESSAGE) {
        this.setOnScreenMessage(text);
        return;
    }

    var IO = (y === this.Types.OnScreenTextCode.CENTER_OF_SCREEN_Y);
    x = this.applyScaleUp(x, false);
    y = this.applyScaleUp(y, false);
    var DP = this.activeSubWindow.processOnScreenTextCommand(
        id, IN, text, x, y,
        HR, specialAttributes, IO);
    this.updatePaintArguments(DP.x, DP.y, DP.width, DP.height);
};

if (!ArrayBuffer.prototype.slice) {
    ArrayBuffer.prototype.slice = function(start, end) {
        var that = new Uint8Array(this);
        if (end == undefined) end = that.length;
        var result = new ArrayBuffer(end - start);
        var resultArray = new Uint8Array(result);
        for (var i = resultArray.length - 1; i >= 0; --i)
            resultArray[i] = that[i + start];
        return result;
    };
}

GameClient.prototype.onUseGlobalResourceCommand = function onUseGlobalResourceCommand() {
    var Ge = this.backlog.peek();
    var data = Ge.bytes;
    var mix = Ge.mix;

    var resourceDef = {
        id: this.intFromTwoCharString(mix, this.whereInCommand + 1),
        type: data[this.whereInCommand + 3]
    };


    var Ga = 0;
    var GZ = null;
    switch (resourceDef.type) {
        case this.Types.ResourceType.RESOURCE_TYPE_IMAGE_RAW:
            var sizeAt = 10;

            resourceDef.x = this.intFromTwoCharString(mix, this.whereInCommand + 4);
            resourceDef.y = this.intFromTwoCharString(mix, this.whereInCommand + 6);
            var G2 = data[this.whereInCommand + sizeAt];
            var G3 = data[this.whereInCommand + sizeAt + 1];
            Ga = 4 * G2 * G3;

            GZ = new Uint8Array(data.buffer.slice(this.whereInCommand + sizeAt + 2, this.whereInCommand + sizeAt + 2 + Ga));

            this.whereInCommand += sizeAt + 2 + Ga;
            var Fv = this.applyScaleUp(G2, false);
            var Fw = this.applyScaleUp(G3, false);

            var GX = document.createElement("canvas");
            GX.width = Fv;
            GX.height = Fw;
            var GY = GX.getContext("2d");
            this.scaleImage(GZ, G2, G3, GY);

            this.globalResourceCache[resourceDef.id] = GX;
            this.useResource(resourceDef);

            break;

        case this.Types.ResourceType.RESOURCE_TYPE_IMAGE_NO_DATA:

            resourceDef.x = this.intFromTwoCharString(mix, this.whereInCommand + 4);
            resourceDef.y = this.intFromTwoCharString(mix, this.whereInCommand + 6);
            this.whereInCommand += 8;
            this.useResource(resourceDef);
            break;

        case this.Types.ResourceType.RESOURCE_TYPE_SOUND_EFFECT:
            var hasData = true;
        case this.Types.ResourceType.RESOURCE_TYPE_SOUND_EFFECT_NO_DATA:

            resourceDef.pan = this.doubleFromChar(data[this.whereInCommand + 4]);
            var gainDb = this.doubleFromChar(data[this.whereInCommand + 5], 80.0);
            resourceDef.volume = Math.pow(10.0, gainDb / 20.0);
            if (resourceDef.volume > 1) resourceDef.volume = 1;
            resourceDef.instanceId = this.intFromTwoCharString(mix, this.whereInCommand + 6);
            this.whereInCommand += 8;
            if (hasData) {

                Ga = this.intFromTwoCharString(mix, this.whereInCommand);

                resourceDef.name = this.asciiBuffer2String(data, this.whereInCommand + 2, Ga);
                this.whereInCommand += 2 + Ga;
                this.loadSoundData(resourceDef);
            } else {
                this.useResource(resourceDef);
            }
            break;
        case this.Types.ResourceType.RESOURCE_TYPE_STOP_SOUND_EFFECT:

            var instanceId = this.intFromTwoCharString(mix, this.whereInCommand + 6);
            var Dm = this.globalResourceCache[resourceDef.id];
            if (Dm && Dm.playing) {
                var H6 = Dm.playing[instanceId];
                if (!H6) {} else if (H6.sourceNode) {
                    if (H6.sourceNode.stop) {
                        H6.sourceNode.stop(0);
                    } else if (H6.sourceNode.noteOff) {
                        H6.sourceNode.noteOff(0);
                    } else {

                    }
                } else if (H6.audio) {
                    if (H6.audio.pause) {
                        H6.audio.pause();
                        try {
                            H6.audio.currentTime = 0;
                        } catch (error) {
                            H6.audio.muted = true;
                            H6.audio.play();
                        }
                    } else {

                    }
                } else {

                }
                delete Dm.playing[instanceId];
            }
            this.whereInCommand += 8;
            break;

            //IJ Added after names were minified
        case this.Types.ResourceType.IJ:
            this.whereInCommand += 8;
            Ga = this.intFromTwoCharString(mix, this.whereInCommand);
            resourceDef.name = this.asciiBuffer2String(data, this.whereInCommand + 2, Ga);
            this.whereInCommand += 2 + Ga;
            var parts = resourceDef.name.split(":");
            addCookieExpAndAddCookieToDoc(parts[0], parts[1], 3650);
            break;

        default:


            this.whereInCommand += 8;
            break;
    }
};

GameClient.prototype.bilinear = function bilinear(H7, H8, H9, HA, HB, HC) {
    var ivect = function(ix, iy, w) {
        return ((ix + w * iy) * 4);
    };
    var inner = function(f00, f10, f01, f11, x, y) {
        var un_x = 1.0 - x;
        var un_y = 1.0 - y;
        return (f00 * un_x * un_y + f10 * x * un_y + f01 * un_x * y + f11 * x * y);
    };
    var scale = HB / H8;
    var i, j;
    var iyv, iy0, iy1, ixv, ix0, ix1;
    var idxD, idxS00, idxS10, idxS01, idxS11;
    var dx, dy;
    var r, g, b, a;
    for (i = 0; i < HC; ++i) {
        iyv = i / scale;
        iy0 = Math.floor(iyv);
        iy1 = (Math.ceil(iyv) > (H9 - 1) ? (H9 - 1) : Math.ceil(iyv));
        for (j = 0; j < HB; ++j) {
            ixv = j / scale;
            ix0 = Math.floor(ixv);
            ix1 = (Math.ceil(ixv) > (H8 - 1) ? (H8 - 1) : Math.ceil(ixv));
            idxD = ivect(j, i, HB);
            idxS00 = ivect(ix0, iy0, H8);
            idxS10 = ivect(ix1, iy0, H8);
            idxS01 = ivect(ix0, iy1, H8);
            idxS11 = ivect(ix1, iy1, H8);
            dx = ixv - ix0;
            dy = iyv - iy0;
            r = inner(H7[idxS00], H7[idxS10], H7[idxS01], H7[idxS11], dx, dy);
            HA[idxD] = r;
            g = inner(H7[idxS00 + 1], H7[idxS10 + 1], H7[idxS01 + 1], H7[idxS11 + 1], dx, dy);
            HA[idxD + 1] = g;
            b = inner(H7[idxS00 + 2], H7[idxS10 + 2], H7[idxS01 + 2], H7[idxS11 + 2], dx, dy);
            HA[idxD + 2] = b;

            a = inner(H7[idxS00 + 3], H7[idxS10 + 3], H7[idxS01 + 3], H7[idxS11 + 3], dx, dy);
            HA[idxD + 3] = a;
        }
    }
};
GameClient.prototype.scaleImage = function scaleImage(G4, G2, G3, context) {
    var canvas = context.canvas;
    var Fv = canvas.width;
    var Fw = canvas.height;
    var Fy = Fv / G2;
    if (Fy === 1) {
        var G1 = context.getImageData(0, 0, Fv, Fw);
        for (var i = G1.data.length; i >= 0; --i)
            G1.data[i] = G4[i];
        context.putImageData(G1, 0, 0);
    } else {
        var Fx = Math.floor(Fy);
        var Fz = Fx ? Fx * G2 : Fv;
        var G0 = Fx ? Fx * G3 : Fw;
        var DH = Math.floor((Fv - Fz) / 2);
        var yOffset = Math.floor((Fw - G0) / 2);
        var G1 = context.getImageData(DH, yOffset, Fz, G0);
        this.bilinear(G4, G2, G3, G1.data, Fz, G0);
        context.putImageData(G1, DH, yOffset);
    }
};

GameClient.prototype.loadSoundData = function loadSoundData(resourceDef) {

    if (this.globalResourceCache[resourceDef.id]) {
        this.useResource(resourceDef);
        return;
    }

    resourceDef.url = this.resourceUrlBase + resourceDef.name + this.audioExt;

    var helper = new SoundLoadHelper(this, resourceDef);
    helper.go();
};

GameClient.prototype.soundEnded = function soundEnded() {
    delete this.resourceDef.resourceCore.playing[this.resourceDef.instanceId];
};

GameClient.prototype.getTimestamp = function Dk() {
    return ~~(new Date().getTime() / 1000);
};

GameClient.prototype.useResource = function useResource(resourceDef) {
    try {

        var Dm = this.globalResourceCache[resourceDef.id];

        if (!Dm) return;

        switch (resourceDef.type) {
            case this.Types.ResourceType.RESOURCE_TYPE_IMAGE_RAW:
            case this.Types.ResourceType.RESOURCE_TYPE_IMAGE_NO_DATA:
                var x = this.applyScaleUp(resourceDef.x, false);
                var y = this.applyScaleUp(resourceDef.y, false);
                this.activeSubWindow.drawImage(Dm, x, y);
                this.updatePaintArguments(x + this.activeSubWindow.x, y + this.activeSubWindow.y, Dm.width, Dm.height);
                break;

            case this.Types.ResourceType.RESOURCE_TYPE_SOUND_EFFECT_NO_DATA:
            case this.Types.ResourceType.RESOURCE_TYPE_SOUND_EFFECT:
                resourceDef.resourceCore = Dm;
                if (!Dm.audios) {

                    var Ds = Dm.name;
                    var cached = this.app.localSounds[Ds];
                    if (cached) {
                        var time = this.getTimestamp();
                        cached.time = time;
                        if (!this.app.changedSounds[Ds])
                            this.app.changedSounds[Ds] = 1;
                        this.soundChanged = true;
                    }

                    var pan = this.audioContext.createPanner();
                    var cos = resourceDef.pan / 127.0;
                    var sin = Math.sqrt(1 - cos * cos);
                    cos /= resourceDef.volume;
                    sin /= resourceDef.volume;
                    pan.setPosition(cos, sin, 0);

                    pan.aberothCoords = cos + "," + sin + ",0";
                    resourceDef.panNode = pan;
                    pan.connect(this.audioContext.destination);


                    var source = this.audioContext.createBufferSource();
                    source.buffer = Dm.buffer;
                    source.resourceDef = resourceDef;
                    Dm.playing[resourceDef.instanceId] = resourceDef;
                    if (source.addEventListener) {
                        source.addEventListener('onended', this.soundEnded);
                    } else {
                        setTimeout(this.soundEnded.bind(source), source.buffer.duration * 1000);
                    }
                    source.connect(pan);
                    resourceDef.sourceNode = source;
                    if (source.start) {
                        source.start(0);
                    } else {
                        source.noteOn(0);
                    }
                } else {
                    var audio = null;
                    for (var i = Dm.audios.length - 1; i >= 0; --i) {
                        var ele = Dm.audios[i];
                        if ((ele.ended || !ele.currentTime) && !ele.seeking) {
                            audio = Dm.audios[i];
                            audio.muted = false;

                            break;
                        }
                    }
                    if (!audio) {

                        audio = new Audio(Dm.url);
                        audio.addEventListener('ended', this.soundEnded);
                        Dm.audios.push(audio);
                    }
                    audio.resourceDef = resourceDef;
                    audio.volume = resourceDef.volume;
                    resourceDef.audio = audio;
                    Dm.playing[resourceDef.instanceId] = resourceDef;
                    audio.play();
                }
                break;

            case this.Types.ResourceType.RESOURCE_TYPE_MOVE_SOUND_EFFECT:
                break;

            case this.Types.IJ:
                break;

            default:

        }
    } catch (error) {

        throw error;
    }

};

GameClient.prototype.onSubWindowCommand = function onSubWindowCommand() {
    var Ge = this.backlog.peek();
    var data = Ge.bytes;
    var mix = Ge.mix;

    var commandType = data[this.whereInCommand + 1];
    var Gw = data[this.whereInCommand + 2];
    this.whereInCommand += 3;
    switch (commandType) {
        case this.Types.SubWindowAction.CREATE_SUB_WINDOW:

            var x = this.intFromTwoCharString(mix, this.whereInCommand);
            var y = this.intFromTwoCharString(mix, this.whereInCommand + 2);
            var width = this.intFromTwoCharString(mix, this.whereInCommand + 4);
            var height = this.intFromTwoCharString(mix, this.whereInCommand + 6);
            this.whereInCommand += 8;

            x = this.applyScaleUp(x, false);
            y = this.applyScaleUp(y, false);
            width = this.applyScaleUp(width, true);
            height = this.applyScaleUp(height, true);

            var Gs = this.allSubWindows[Gw];
            var Gt = new SubWindow(this, Gw, x, y, width, height);
            this.allSubWindows[Gt.id] = Gt;
            if (Gs) Gs.destroyWindow();
            if (Gt.id > this.largestValidSubwindowId) this.largestValidSubwindowId = Gt.id;
            this.recalculateEntireScreenSize();
            this.previousSubWindowId = this.activeSubWindow.id;
            this.activeSubWindow = Gt;
            break;
        case this.Types.SubWindowAction.SWITCH_TO_SUB_WINDOW:
            this.previousSubWindowId = this.activeSubWindow.id;
            this.activeSubWindow = this.allSubWindows[Gw];
            break;
        case this.Types.SubWindowAction.SWITCH_BACK_TO_PREVIOUS_WINDOW:
            var Gu = this.activeSubWindow.id;
            this.activeSubWindow = this.allSubWindows[this.previousSubWindowId];
            this.previousSubWindowId = Gu;
            break;
        case this.Types.SubWindowAction.DESTROY_SUB_WINDOW:
            var Gs = this.allSubWindows[Gw];
            this.allSubWindows[Gw] = null;
            if (Gs != null) Gs.destroyWindow();
            this.recalculateEntireScreenSize();
            break;
        default:

            break;
    }
};

GameClient.prototype.drawFilledRect = function drawFilledRect(x, y, HL, HM, drawExtraXWhenScaling, drawExtraYWhenScaling) {
    if (this.needsSpecialScaling()) {
        var D1;
        if (this.scrollingRight) {
            D1 = true;
            if (this.totalCopyDx * this.scaleUp % this.scaleDown != 0) D1 = false;
        } else {
            D1 = false;
            if (this.totalCopyDx * this.scaleUp % this.scaleDown != 0) D1 = true;
        }
        var HJ = this.applyScaleUp(x, D1);

        var D2;
        if (this.scrollingDown) {
            D2 = true;
            if (this.totalCopyDy * this.scaleUp % this.scaleDown != 0) D2 = false;
        } else {
            D2 = false;
            if (this.totalCopyDy * this.scaleUp % this.scaleDown != 0) D2 = true;
        }

        var HK = this.applyScaleUp(y, D2);

        var Ha = x + HL;
        var HY = this.applyScaleUp(Ha, D1);
        var Hb = y + HM;
        var HZ = this.applyScaleUp(Hb, D2);
    } else {
        var HJ = this.applyScaleUp(x, !drawExtraXWhenScaling);
        var HK = this.applyScaleUp(y, !drawExtraYWhenScaling);

        var Ha = x + HL;
        var HY = this.applyScaleUp(Ha, drawExtraXWhenScaling);
        var Hb = y + HM;
        var HZ = this.applyScaleUp(Hb, drawExtraYWhenScaling);
    }


    HL = HY - HJ;
    HM = HZ - HK;


    //added for potion handler
    if (this.pickupPotionBool) {
        this.pickupPotion(HJ, HK)
    }

    this.activeSubWindow.fillRect(HJ, HK, HL, HM);
    this.updatePaintArguments(HJ + this.activeSubWindow.x, HK + this.activeSubWindow.y, HL, HM);
};

GameClient.prototype.stop = function stop(Dj, reload) {
    if (this.shuttingDown) return;

    this.shuttingDown = true;

    this.app.stop();
    if (this.connection) {
        this.connection.shutDown();
        this.connection = null;
    }


    app.sessionActive = false;

    var suppress = Dj || (this.connection && this.connection.suppressShutdownMessage);
    if (!suppress)
        this.setOnScreenMessage("Press R to respawn, or Q to quit to the main menu.");

    if (reload) {
        document.location.reload();
    } else if (this.died && this.reloadOnDeath) {
        setTimeout(function() {
            document.location.reload();
        }, 0);
    }
};

//checkClientThenRepaint added after old client was minified
//checkClientThenRepaint is sometimes called in the new client where repaintScene was in the old client
GameClient.prototype.checkClientThenRepaint = function checkClientThenRepaint() {
    if (this.clientIsMobileClient) {
        this.repaintScene();
    } else {
        this.DeskClientRepaintingScene = true;
        if (!this.clientIsDeskTop) {
            window.requestAnimationFrame(DeskClientRepaintingScene);
            this.clientIsDeskTop = true;
        }
    }
};

GameClient.prototype.setOnScreenMessage = function setOnScreenMessage(message) {
    if (!message && !this.onScreenMessage) return;
    if (message === this.onScreenMessage) return;


    this.onScreenMessage = message;
    if (this.windowId != null) {
        var height = this.font ? this.font.height + 5 : 50;
        this.updatePaintArguments(0, 0, this.entireScreenSizeX, height);
        this.checkClientThenRepaint();
    } else {
        this.context.fillStyle = "rgba(0,0,0,1)";
        this.context.fillRect(0, 0, this.sizeX, this.sizeY);
        var Bg = this.getMessageToDisplay();
        if (Bg.length > 0) {
            this.preContext.clearRect(0, 0, this.sizeX, this.sizeY);
            this.drawOnScreenMessage(Bg, 0);
            this.context.drawImage(this.preCanvas, 0, 0, this.sizeX, this.sizeY, 0, 0, this.sizeX, this.sizeY);
        }
    }

};

GameClient.prototype.getMessageToDisplay = function getMessageToDisplay() {
    var Bg = this.onScreenMessage;
    if (!Bg) Bg = "";
    return Bg;
};

GameClient.prototype.drawOnScreenMessage = function drawOnScreenMessage(message, Hj) {
    if (!message) return;

    this.preContext.font = this.font.asString;
    this.preContext.fillStyle = "rgba(0,0,0,1)";
    var width = this.font.measureText(message, this.context) + 2;
    var Hm = ~~((Hj - width) / 2);
    if (Hm < 1) Hm = 1;
    for (var xMax = Hm + 5, x = xMax - 3; x < xMax; ++x)
        for (var yMax = this.font.height + 4, y = yMax - 3; y < yMax; ++y)
            this.preContext.fillText(message, x, y);
    this.preContext.fillStyle = "rgba(255,255,255,1)";
    this.preContext.fillText(message, Hm + 3, this.font.height + 2);
};

GameClient.prototype.greatestSubWindow = function greatestSubWindow(x, y) {
    if (this.app.keysPressed[17]) return 0;
    for (var i = this.largestValidSubwindowId; i > 0; --i) {
        var Gx = this.allSubWindows[i];
        if (Gx &&
            x >= Gx.x && x < Gx.x + Gx.width &&
            y >= Gx.y && y < Gx.y + Gx.height) {
            return i;
        }
    }
    return 0;
};

GameClient.prototype.recalculateEntireScreenSize = function recalculateEntireScreenSize() {
    var Hn = 0;
    var Ho = 0;

    for (var i = this.largestValidSubwindowId; i >= 0; --i) {
        var Gx = this.allSubWindows[i];
        if (Gx) {
            if (Gx.x + Gx.width > Hn) Hn = Gx.x + Gx.width;
            if (Gx.y + Gx.height > Ho) Ho = Gx.y + Gx.height;
        }
    }

    if (this.entireScreenSizeX != Hn || this.entireScreenSizeY != Ho) {
        this.entireScreenSizeX = Hn;
        this.entireScreenSizeY = Ho;
    }

    this.updatePaintArguments(0, 0, this.entireScreenSizeX, this.entireScreenSizeY);
};

GameClient.prototype.repaintScene = function repaintScene() {
    var Bp = {
        xMin: this.repaintSmallX,
        yMin: this.repaintSmallY,
        xMax: this.repaintBigX,
        yMax: this.repaintBigY
    };
    Bp.dx = Bp.xMax - Bp.xMin;
    Bp.dy = Bp.yMax - Bp.yMin;
    if (Bp.dx > 0 && Bp.dy > 0) {

        if (Bp.xMin > 0) {
            --Bp.xMin;
            ++Bp.dx;
        }
        if (Bp.xMin + Bp.dx < this.entireScreenSizeX)
            ++Bp.dx;
        if (Bp.yMin > 0) {
            --Bp.yMin;
            ++Bp.dy;
        }
        if (Bp.yMin + Bp.dy < this.entireScreenSizeY)
            ++Bp.dy;



        this.preContext.clearRect(Bp.xMin, Bp.yMin, Bp.dx, Bp.dy);

        for (var i = 0; i <= this.largestValidSubwindowId; ++i) {
            var Gx = this.allSubWindows[i];
            if (Gx)
                Gx.drawOntoMainWindow(this.preContext, Bp);
        }

        if (this.onScreenMessage != null) {
            var message = this.getMessageToDisplay();
            this.drawOnScreenMessage(message, this.entireScreenSizeX);
        }

        if (Bp.dx > 0 && Bp.dy > 0)
            this.context.drawImage(this.preCanvas, Bp.xMin, Bp.yMin, Bp.dx, Bp.dy, Bp.xMin, Bp.yMin, Bp.dx, Bp.dy);
    }

    this.repaintSmallX = this.entireScreenSizeX;
    this.repaintSmallY = this.entireScreenSizeY;
    this.repaintBigX = 0;
    this.repaintBigY = 0;
};

GameClient.prototype.updatePaintArguments = function updatePaintArguments(x, y, HL, HM) {
    if (x + HL > this.repaintBigX)
        this.repaintBigX = Math.min(x + HL, this.entireScreenSizeX);
    if (y + HM > this.repaintBigY)
        this.repaintBigY = Math.min(y + HM, this.entireScreenSizeY);
    if (y < this.repaintSmallY)
        this.repaintSmallY = Math.max(y, 0);
    if (x < this.repaintSmallX)
        this.repaintSmallX = Math.max(x, 0);
};

GameClient.prototype.applyScaleUp = function applyScaleUp(Hq, Hp) {
    var Hr = Hq * this.scaleUp;
    var Gz = ~~(Hr / this.scaleDown);
    if (Hp && Hr % this.scaleDown != 0) ++Gz;
    return Gz;
};

GameClient.prototype.applyScaleDown = function applyScaleDown(Hq) {
    return ~~((Hq * this.scaleDown) / this.scaleUp);
};

GameClient.prototype.getRgbaString = function getRgbaString(r, g, b, a) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
};

GameClient.prototype.intFromThreeCharString = function intFromThreeCharString(mix, where) {
    return (mix.getUint16(where, false) << 8) + mix.getUint8(where + 2);
};
GameClient.prototype.intFromTwoCharString = function intFromTwoCharString(mix, where) {
    return mix.getUint16(where, false);
};

GameClient.prototype.doubleFromChar = function doubleFromChar(c, Hs) {
    var Ht = c < 128 ? c : c - 256;
    if (Ht === -128) Ht = -127;
    return Hs ? Ht * Hs / 127.0 : Ht;
};


GameClient.prototype.stringFromLengthString = function stringFromLengthString(Ge, where) {
    var length = this.intFromTwoCharString(Ge.mix, where);
    return this.asciiBuffer2String(Ge.bytes, where + 2, length);
};

GameClient.prototype.asciiBuffer2String = function asciiBuffer2String(data, where, count) {
    var Gz = "";
    for (var i = where, iMax = where + count; i < iMax; ++i)
        Gz += String.fromCharCode(data[i]);
    return Gz;
};

GameClient.prototype.disableImageSmoothing = function disableImageSmoothing(ctx) {
    ctx.imageSmoothingEnabled = false;
    ctx.ImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
};

GameClient.prototype.sendKeyCommand = function sendKeyCommand(code, action) {
    if (this.shuttingDown) return;
    this.keyBytes[9] = code;
    this.keyBytes[10] = action;
    this.connection.sendToServer(this.keyBytes.buffer, "key");
};

GameClient.prototype.sendMouseCommand = function sendMouseCommand(e, GA, FP) {
    if (this.shuttingDown) return -1;
    var x = e.x,
        y = e.y;

    var Gx = this.greatestSubWindow(x, y);
    if (FP && Gx)
        e.button = 3;

    var button = e.button;
    x -= this.allSubWindows[Gx].x;
    y -= this.allSubWindows[Gx].y;

    x = this.applyScaleDown(x);
    y = this.applyScaleDown(y);

    this.sendMouseCommandInner(Gx, button, GA, x, y);
    return Gx;
};

GameClient.prototype.sendMouseCommandInner = function sendMouseCommandInner(Gx, button, action, x, y) {
    if (this.shuttingDown) return;
    this.mouseBytes[9] = Gx;
    this.mouseBytes[10] = button;
    this.mouseBytes[11] = action;
    this.mouseMix.setUint16(12, x, false);
    this.mouseMix.setUint16(14, y, false);

    this.connection.sendToServer(this.mouseBytes.buffer, "mouse");
};

function SoundLoadHelper(client, resourceDef) {

    this.client = client;
    this.resourceDef = resourceDef;

    if (client.app.localSounds[resourceDef.name]) {


        try {
            var GC = client.app.localSounds[resourceDef.name].data;
            var ab = this.fromStored(GC);
            this.request = {
                status: 200,
                response: ab
            };
            this.localStorage = true;
        } catch (ex) {

            delete client.app.localSounds[resourceDef.name];
            client.soundChanged = true;
            client.app.changedSounds[resourceDef.name] = 2;
        }
    }


};
SoundLoadHelper.prototype.fromStored = function(GC) {


    var firstCc = GC.charCodeAt(0);
    var odd = firstCc === 0xFFFF ? 0 : 1;
    var byteLength = 2 * GC.length - 2 + odd;
    var ab = new ArrayBuffer(byteLength);

    var mix = new DataView(ab);
    if (odd)
        mix.setUint8(0, firstCc);
    var iByte = odd;
    for (var i = 1, iMax = GC.length; i < iMax; ++i) {
        var cc = GC.charCodeAt(i);
        mix.setUint16(iByte, cc, false);
        iByte += 2;
    }

    return ab;
};
SoundLoadHelper.prototype.toStored = function(response) {



    var odd = response.byteLength & 1;
    var mix = new DataView(response);
    var toStore = String.fromCharCode(odd ? mix.getUint8(0) : 0xFFFF);
    for (var i = odd, iMax = response.byteLength; i < iMax; i += 2) {
        var cc = mix.getUint16(i, false);
        toStore += String.fromCharCode(cc);
    }

    return toStore;
};
SoundLoadHelper.prototype.go = function() {

    if (this.localStorage) {
        this.onLoad();
    } else {

        this.request = new XMLHttpRequest();

        this.request.open('GET', this.resourceDef.url, true);
        this.request.responseType = 'arraybuffer';

        this.request.onload = this.onLoad.bind(this);
        this.request.onerror = this.onError.bind(this);
        this.request.send();
    }

};
SoundLoadHelper.prototype.onLoad = function(evt) {

    try {
        var client = this.client;
        var response = this.request.response;
        var resDef = this.resourceDef;
        if (this.request.status !== 200 && this.request.status !== 0) {
            this.onError("request status " + this.request.status);
        } else if (false) {
            if (!this.localStorage) {
                var toStore = this.toStored(response);


                client.app.localSounds[resDef.name] = {
                    'time': client.Dk(),
                    'data': toStore
                };
                client.app.changedSounds[resDef.name] = 2;
                client.soundChanged = true;
                client.lastSoundStore = 0;
            }
            client.audioContext.decodeAudioData(
                response,
                this.onDecode.bind(this),
                this.onError.bind(this));
        } else {
            var audio = new Audio(resDef.url);
            var resourceCore = {
                url: resDef.url,
                audios: [audio],
                playing: {},
                name: resDef.name
            };
            audio.addEventListener('ended', GameClient.prototype.soundEnded);
            client.globalResourceCache[resDef.id] = resourceCore;
            client.useResource(resDef);
        }
    } catch (error) {

    }

};


SoundLoadHelper.prototype.onDecode = function(buffer) {

    try {
        var resourceCore = {
            url: this.resourceDef.url,
            "buffer": buffer,
            playing: {},
            name: this.resourceDef.name
        };
        this.client.globalResourceCache[this.resourceDef.id] = resourceCore;

        this.client.useResource(this.resourceDef);
    } catch (error) {

    }

};
SoundLoadHelper.prototype.onError = function(error) {


    if (this.localStorage) {

        this.localStorage = false;
        this.client.app.deleteSound(this.resourceDef.name, true);
        setTimeout(this.go.bind(this), 0);
    }

};

/*Begin Cookie functions*/

var IP = 10;
var IQ = 9000000000000000;
var cCode0 = "0".charCodeAt(0);
var cCode9 = "9".charCodeAt(0);
var cCodeA = "A".charCodeAt(0);
var cCodeZ = "Z".charCodeAt(0);
var cCodea = "a".charCodeAt(0);
var cCodez = "z".charCodeAt(0);

function formatPlayerNameCookie(playerName) {
    if (!playerName) return 0;
    var Gz = 0;
    var IS = 1;
    playerName = playerName.toLowerCase();
    var length = Math.min(playerName.length, 10);
    for (var i = 0; i < length; i++) {
        Gz += IS * ((playerName.charCodeAt(i) - cCodea) + 1);
        IS *= 27;
    }
    return Gz;
}

function IT(playerName) {
    if (playerName.length < 3 || playerName.length > 10) {
        return 0;
    }
    var playerNameCookie = formatPlayerNameCookie(playerName);
    var IW = I2(playerNameCookie);
    if (IW > 0) {
        return IW;
    }
    var IX = IY();

    //note 3650 is the amount of days in ten years
    addCookieExpAndAddCookieToDoc(playerNameCookie, IX, 3650);
    return IX;
}

function I0(clientIsMobileClient) {
    var I1 = I2("a");
    if (I3(I1)) {
        return I1;
    }

    var I4;
    var I5 = I6(IP - 1);
    if (clientIsMobileClient) {
        I4 = "M" + I5;
    } else {
        I4 = "B" + I5;
    }

    addCookieExpAndAddCookieToDoc("a", I4, 3650);
    return I4;
}

function I3(I8) {
    if (!I8) {
        return false;
    }
    if (I8.length != IP) {
        return false;
    }
    if (!(I8.startsWith("B") || I8.startsWith("M"))) {
        return false;
    }
    for (var i = 0; i < I8.length; i++) {
        var I9 = I8.charCodeAt(i);
        if (!((I9 >= cCode0 && I9 <= cCode9) ||
                (I9 >= cCodea && I9 <= cCodez) ||
                (I9 >= cCodeA && I9 <= cCodeZ))) {
            return false;
        }
    }
    return true;
}

function IY() {
    while (true) {
        var IZ = IB(16, true, false);
        var Ia = parseInt(IZ, 10);
        if (Ia < IQ) {
            return Ia;
        }
    }
}

function I6(IA) {
    return IB(IA, false, true);
}

function IB(IC, ID, Ib) {
    var Gz = "";
    var IF = new Uint32Array(1);
    for (var i = 0; i < IC; i++) {
        window.crypto.getRandomValues(IF);
        var IE = IF[0] % 62;
        if (IE >= 0 && IE <= 9) {
            IE = (cCode0 + IE);
        } else if (IE >= 10 && IE <= 35) {
            if (!Ib) {
                i--;
                continue;
            }
            IE = (cCodea + (IE - 10));
        } else if (IE >= 36 && IE <= 61) {
            if (!Ib) {
                i--;
                continue;
            }
            IE = (cCodeA + (IE - 36));
        }
        if (!ID) {
            if (IE == "O".charCodeAt(0) || IE == "0".charCodeAt(0) ||
                IE == "l".charCodeAt(0) || IE == "I".charCodeAt(0) || IE == "1".charCodeAt(0) ||
                IE == "m".charCodeAt(0) || IE == "n".charCodeAt(0)) {
                i--;
                continue;
            }
        }
        Gz += String.fromCharCode(IE);
    }
    return Gz;
}

function getCookiesFromJson(accountCookie) {
    var file = path.join(__dirname, 'assets/cookies.json');
    var JSONCookies = fs.readFileSync(file, 'utf8');

    JSONCookies = JSON.parse(JSONCookies);
    for (key in JSONCookies) {
        if (JSONCookies[key]["username"] == username) {
            accountCookie = JSONCookies[key]["cookie"]
        } 
    }

    return accountCookie;

}

function I2(playerNameCookie) {
    var d = [];
    var accountCookie = "";

    accountCookie = getCookiesFromJson(accountCookie);

    var e = accountCookie.split(";");
    playerNameCookie = RegExp("^\\s*" + playerNameCookie + "=\\s*(.*?)\\s*$");
    for (var b = 0; b < e.length; b++) {
        var f = e[b].match(playerNameCookie);
        f && d.push(f[1])
    }
    return d[0]
}

function addCookieExpAndAddCookieToDoc(resourceDefPart1, resourceDefPart2, daysInTenYears) {
    var d = new Date();
    d.setTime(d.getTime() + (daysInTenYears * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = resourceDefPart1 + "=" + resourceDefPart2 + ";" + expires + ";path=/";
    datacookies.push(resourceDefPart1 + "=" + resourceDefPart2 + ";");
}
/*End Cookie functions*/


function Connection(client) {
    this.client = client;
    this.socket = null;
    this.initializationComplete = false;
    this.lastHandshakeMessageReceived = null;
    this.isListening = false;
    this.totalBytesRead = 0;
    this.totalBytesWritten = 0;
    this.lastBytesWritten = 0;
    this.heartbeatSenderHandle = null;
    this.cleanCloseInitiated = false;
    this.handshakeBytes = null;

    this.heartbeatBytes = new ArrayBuffer(6);
    var Do = new Uint8Array(this.heartbeatBytes);
    Do[0] = this.client.Types.Compression.NOT_COMPRESSED_FLAG;
    Do[1] = 0;
    Do[2] = 3;
    Do[3] = this.client.Types.ClientServerMessage.CLIENT_STATUS;
    var Dp = new DataView(this.heartbeatBytes);
    Dp.setUint16(4, this.Types.Heartbeat.HEARTBEAT_STATUS_SIGNAL, false);
}

Connection.prototype.Types = {
    Handshake: {
        HANDSHAKE_MESSAGE_ERROR_STRING: 0,
        HANDSHAKE_MESSAGE_SUCCESS: 1,
        HANDSHAKE_MESSAGE_DISPLAY_STRING: 2,
        HANDSHAKE_MESSAGE_WAIT_IN_LINE: 3,
        HANDSHAKE_MESSAGE_LINE_TOO_LONG: 4,
        HANDSHAKE_MESSAGE_PASSWORD_CHALLENGE: 5,
        HANDSHAKE_MESSAGE_account_guard_challenge: 6
    },

    Heartbeat: {
        CLIENT_HEARTBEAT_SECONDS: 30,
        HEARTBEAT_STATUS_SIGNAL: 65000
    }
};

Connection.prototype.createSocket = function createSocket() {


    var javaVersion = this.client.javaVersion;
    if (!javaVersion)
        javaVersion = 'js_compress';
    javaVersion = javaVersion + ":" + I0(this.client.clientIsMobileClient) + IT(this.client.playerName);
    var handshake =
        this.client.playerName + '\0' +
        (this.client.password && this.client.encryptPassword ? "encryptMD5" : this.client.password) + '\0' +
        this.client.screenDefinition + '\0' +
        this.client.scaleUp + '\0' +
        this.client.scaleDown + '\0' +
        this.client.fontSize + '\0' +
        'Windows\0' +
        javaVersion + '\0' +
        'false\0' +
        'false\0' +
        '0\0' +
        'true\0';
    this.handshakeBytes = this.ascii2ArrayBuffer(handshake);

    var url = "ws:/" + "/" + this.client.ipAddress + ":80/Game" + "ClientHTML5";
    if (this.client.app.proxy != "none") {
        var proxyDetails = this.client.app.proxy;
        var proxyList = proxyDetails.split(":")
        if (proxyList.length == 2) {
            var proxy = process.env.http_proxy || "http://" + proxyList[0] + ":" + proxyList[1];
        } else {
            var proxy = process.env.http_proxy || "http://" + proxyList[2] + ":" + proxyList[3] + "@"  + proxyList[0] + ":" + proxyList[1] ;

        }
        
        var options = urlObj.parse(proxy);
        var agent = new HttpsProxyAgent(options);
        this.socket = new WebSocket(url, {agent: agent});

    } else {
        this.socket = new WebSocket(url);
    }
    
    this.socket.binaryType = "arraybuffer";
    this.socket.onopen = this.onSocketOpen.bind(this);
    this.socket.onmessage = this.onSocketMessage.bind(this);
    this.socket.onerror = this.onSocketError.bind(this);
    this.socket.onclose = this.onSocketClose.bind(this);
};

Connection.prototype.onSocketOpen = function onSocketOpen(e) {

    if (!this.handshakeBytes) {

        this.shutDown();
        return;
    }
    this.sendData(this.handshakeBytes, "handshake");
    this.isListening = true;
};

Connection.prototype.onSocketMessage = function onSocketMessage(e) {
    if (!this.isListening) {

        return;
    }

    if (!(e.data instanceof ArrayBuffer)) {

        this.shutDown();
        return;
    }

    var messageBytes = new Uint8Array(e.data);
    if (this.lastHandshakeMessageReceived != this.Types.Handshake.HANDSHAKE_MESSAGE_SUCCESS) {

        this.receiveHandshake(messageBytes);
        return;
    }

    this.client.onServerMessage(messageBytes);
};

Connection.prototype.onSocketError = function onSocketError(e) {

    this.shutDown();
};

Connection.prototype.onSocketClose = function onSocketClose() {

    if (!this.cleanCloseInitiated)
        this.shutDown();
};

Connection.prototype.receiveHandshake = async function receiveHandshake(message) {

    var Di = message[0];
    var Dg = this.client.asciiBuffer2String(message, 1, message.length - 2);

    var D3, Dh;
    switch (Di) {
        case this.Types.Handshake.HANDSHAKE_MESSAGE_SUCCESS:
        case this.Types.Handshake.HANDSHAKE_MESSAGE_ERROR_STRING:
        case this.Types.Handshake.HANDSHAKE_MESSAGE_DISPLAY_STRING:
            D3 = Dg;
            break;
        case this.Types.Handshake.HANDSHAKE_MESSAGE_WAIT_IN_LINE:
            var status = "";
            if (Dg === 0) {
                status = "You are at the front of the line to get in.";
            } else if (Dg == 1) {
                status = "There is one player in line ahead of you.";
            } else if (Dg > 1) {
                status = "There are " + Dg + " players in line ahead of you.";
            }
            D3 = "Aberoth is filled to capacity. " + status + " Please wait...";
            break;
        case this.Types.Handshake.HANDSHAKE_MESSAGE_LINE_TOO_LONG:
            D3 = "The line to get in to Aberoth is full(" + Dg + " players). Please try again later.";
            break;
        case this.Types.Handshake.HANDSHAKE_MESSAGE_PASSWORD_CHALLENGE:
            Dh = MD5(this.client.password + Dg);
            break;
        case this.Types.Handshake.HANDSHAKE_MESSAGE_account_guard_challenge:
            const { value: emailCode } = await Swal.fire({
                input: 'text',
                inputLabel: 'Enter account guard',
                showCancelButton: true,
                inputValidator: (value) => {
                if (!value) {
                    return 'You need to write something!'
                }
            }
            })

            if (emailCode) {
                Dh = emailCode
                break;
            }
        default:
            D3 = "Unexpected handshake response: " + Di + "(" + Dg + ")";
            Di = this.Types.Handshake.HANDSHAKE_MESSAGE_ERROR_STRING;
    }
    this.lastHandshakeMessageReceived = Di;

    if (D3)
        this.client.setOnScreenMessage(D3);

    var HX = Dh ? Dh + '\0' : '\0';
    var ack = this.ascii2ArrayBuffer(HX);
    this.sendData(ack, "handshakeAck");

    if (Di === this.Types.Handshake.HANDSHAKE_MESSAGE_ERROR_STRING) {
        this.shutDown(true);
    } else if (Di === this.Types.Handshake.HANDSHAKE_MESSAGE_SUCCESS) {

        this.totalBytesRead = 0;
        this.totalBytesWritten = 0;
        this.lastBytesWritten = 0;
        this.heartbeatSenderHandle = setInterval(this.sendHeartbeat.bind(this), this.Types.Heartbeat.CLIENT_HEARTBEAT_SECONDS * 1000);
        this.initializationComplete = true;
        this.client.app.startSucceeded();
    }
};

Connection.prototype.sendData = function sendData(data, description) {
    if (!this.socket || this.socket.readyState !== 1) return;

    var arrayBuf = null;
    if (data instanceof ArrayBuffer) {

        arrayBuf = data;
    } else if (data.buffer) {

        arrayBuf = data.buffer;
    } else {

        this.shutDown();
        return;
    }


    this.socket.send(arrayBuf);
};

Connection.prototype.sendToServer = function sendToServer(bytes, description) {
    this.sendData(bytes, description);
    this.totalBytesWritten += bytes.length;
};

Connection.prototype.sendHeartbeat = function sendHeartbeat() {
    var allQuiet = this.lastBytesWritten === this.totalBytesWritten;

    if (allQuiet) {
        //if this bugs change "heartbeat" to "Do"
        this.sendData(this.heartbeatBytes, "heartbeat");
    } else {
        this.lastBytesWritten = this.totalBytesWritten;
    }
};

Connection.prototype.shutDown = function shutDown(Dj) {

    if (this.cleanCloseInitiated) return;
    this.cleanCloseInitiated = true;
    this.suppressShutdownMessage = Dj;

    this.isListening = false;
    if (this.heartbeatSenderHandle) {
        clearInterval(this.heartbeatSenderHandle);
        this.heartbeatSenderHandle = null;
    }
    if (this.socket) {
        this.sendData(new ArrayBuffer(0), "FINISHED_WRITING_SIGNAL");
        this.socket.close();
        this.socket = null;
    }
    if (!this.client.backlog.getLength())
        this.client.stop(Dj);
};

Connection.prototype.ascii2ArrayBuffer = function ascii2ArrayBuffer(str) {
    var buf = new ArrayBuffer(str.length),
        bufView = new Uint8Array(buf);
    for (var i = str.length - 1; i >= 0; --i) {
        bufView[i] = str.charCodeAt(i);
    }
    return buf;
};

function SubWindow(client, id, x, y, width, height) {
    this.client = client;
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;


    this.textLeftGap = this.Types.Misc.BASE_TEXT_SCREEN_EDGE_GAP + 1;
    this.textTopGap = this.Types.Misc.BASE_TEXT_SCREEN_EDGE_GAP;

    this.textBottomGap = ~~((this.Types.Misc.BASE_TEXT_SCREEN_EDGE_GAP * client.scaleUp) / client.scaleDown + 1);
    this.textRightGap = ~~((this.Types.Misc.BASE_TEXT_SCREEN_EDGE_GAP * client.scaleUp * 3) / client.scaleDown + 3);

    this.fillRectSizeX = 1;
    this.fillRectSizeY = 1;

    this.canvas = document.createElement("canvas");
    this.canvas.width = width;
    this.canvas.height = height;

    this.context = this.canvas.getContext("2d");
    this.client.disableImageSmoothing(this.context);

    this.setGraphicsToDefault();
}

SubWindow.prototype.Types = {
    TextAlign: {
        JUSTIFY_CENTER: 0,
        JUSTIFY_LEFT: 1,
        JUSTIFY_RIGHT: 2
    },

    Misc: {
        SHADOW_PIXELS: 2,
        BASE_TEXT_SCREEN_EDGE_GAP: 4
    }
};

SubWindow.prototype.destroyWindow = function destroyWindow() {
    this.context = null;
    if (this.canvas) {
        if (this.canvas.parentNode)
            this.canvas.parentNode.removeChild(this.canvas);
        this.canvas = null;
    }
};

SubWindow.prototype.setGraphicsToDefault = function setGraphicsToDefault() {
    var HG;
    if (this.id === this.client.Types.SubWindowId.MAIN_WINDOW_ID || this.id === this.client.Types.SubWindowId.HIT_POINTS_WINDOW_ID) {
        HG = "rgba(0,0,0,1)";
    } else {
        HG = "rgba(0,0,0,0)";
    }

    this.setColor(HG);
    this.context.fillRect(0, 0, this.width, this.height);
};

SubWindow.prototype.drawOntoMainWindow = function drawOntoMainWindow(preContext, Co) {
    var xMin = Math.max(Co.xMin - this.x, 0);
    var yMin = Math.max(Co.yMin - this.y, 0);
    var xMax = Math.min(Co.xMax - this.x, this.width);
    var yMax = Math.min(Co.yMax - this.y, this.height);
    var dx = xMax - xMin;
    var dy = yMax - yMin;
    if (dx <= 0 || dy <= 0) return;

    preContext.drawImage(this.canvas, xMin, yMin, dx, dy, this.x + xMin, this.y + yMin, dx, dy);

    if (this.allOnScreenText != null) {
        for (var i in this.allOnScreenText)
            this.drawShadowedText(preContext, this.allOnScreenText[i]);
    }
};

SubWindow.prototype.copyArea = function copyArea(x0, y0, width, height, dx, dy) {
    var HH = this.context.getImageData(x0, y0, width, height);
    this.context.putImageData(HH, x0 + dx, y0 + dy);
};

SubWindow.prototype.fillRect = function fillRect(HJ, HK, HL, HM) {
    this.context.clearRect(HJ, HK, HL, HM);
    this.context.fillRect(HJ, HK, HL, HM);
};

SubWindow.prototype.setColor = function setColor(color) {
    this.currentColor = color;
    this.context.fillStyle = color;
};

SubWindow.prototype.getColor = function getColor() {
    return this.currentColor;
};

SubWindow.prototype.drawImage = function drawImage(image, x, y) {
    this.context.drawImage(image, x, y);
};

SubWindow.prototype.createOnScreenText = function createOnScreenText(rawText, justification, textLines, baseLine, Bp, color, rgba, specialAttributes) {
    var result = {
        justification: justification,
        rawText: rawText,
        textLines: textLines,
        textBoundsInSubWindow: Bp,
        baseLine: baseLine,
        color: color,
        rgba: rgba,
        specialAttributes: specialAttributes
    };

    return result;
};



SubWindow.prototype.createTextLineAndInfo = function createTextLineAndInfo(text, yOffset, width) {
    return {
        text: text,
        yOffset: yOffset,
        width: width
    };
};

SubWindow.prototype.drawShadowedText = function drawShadowedText(g, DC) {
    g.fillStyle = "rgba(0,0,0,1)";

    switch (DC.specialAttributes) {
        case this.client.Types.Font.ITALIC:
        case this.client.Types.Font.BOLD:
        case this.client.Types.Font.SMALL:
            g.font = this.client.fonts[DC.specialAttributes].asString;
            break;
        default:
            g.font = this.client.fonts[this.client.Types.Font.PLAIN_TEXT].asString;
    }

    for (var i = 0; i < DC.textLines.length; ++i) {
        var DR = DC.textLines[i];
        var indent = this.getIndent(DC, DR);
        for (var DH = 0; DH < 3; ++DH) {
            for (var yOffset = 0; yOffset < 3; ++yOffset) {
                if (DH === 1 && yOffset === 1)
                    continue;
                g.fillText(DR.text,
                    DC.baseLine.x + this.x + DH + indent,
                    DC.baseLine.y + this.y + yOffset + DR.yOffset);
            }
        }
    }

    for (var i = 0; i < DC.textLines.length; ++i) {
        var DR = DC.textLines[i];
        var indent = this.getIndent(DC, DR);
        g.fillStyle = DC.color;
        g.fillText(DR.text,
            DC.baseLine.x + this.x + 1 + indent,
            DC.baseLine.y + this.y + 1 + DR.yOffset);
    }
};

SubWindow.prototype.getIndent = function getIndent(DC, DR) {
    var indent = 0;
    var DS = DC.textBoundsInSubWindow.width - DR.width;
    switch (DC.justification) {
        case this.Types.TextAlign.JUSTIFY_CENTER:
            indent = ~~(DS / 2);
            break;
        case this.Types.TextAlign.JUSTIFY_RIGHT:
            indent = DS;
            break;
    }
    return indent;
};

SubWindow.prototype.processOnScreenTextCommand = function processOnScreenTextCommand(HO, type, HN, HP, HQ,
    HR, specialAttributes, HS) {
    var DL = new Array();

    var HW = this.allOnScreenText && this.allOnScreenText[HO];
    if (HW)
        DL.push(HW);

    if (HO === this.client.Types.OnScreenTextCode.CLEAR_ALL_ON_SCREEN_TEXT) {
        if (this.allOnScreenText) {
            for (var HT in this.allOnScreenText)
                DL.push(this.allOnScreenText[HT]);
            this.allOnScreenText = {};
        }
    } else {
        var text;
        var HU, HV;

        if (type === this.client.Types.FrameCommands.MOVE_ON_SCREEN_TEXT) {
            if (!HW) return null;
            text = HW.rawText;
            HU = HW.color;
            HV = HW.rgba;
            specialAttributes = HW.specialAttributes;
        } else {
            text = HN;
            HU = this.context.fillStyle;
            HV = this.currentColor;
        }

        if (text) {
            var Cp = null;

            var DJ = this.getLines(text);
            var DI = [];

            var DE = 0;

            var Cr = this.client.fonts[specialAttributes];

            for (var i = 0; i < DJ.length; ++i) {
                var DR = DJ[i];
                var DG = Cr.measureText(DR, this.context);

                DG += this.Types.Misc.SHADOW_PIXELS;

                if (!Cp) {
                    Cp = {
                        width: DG
                    };
                } else if (DG > Cp.width) {
                    Cp.width = DG;
                }
                DI.push(this.createTextLineAndInfo(DR, DE, DG));
                DE += Cr.height;
            }

            if (!Cp) {
                Cp = {
                    width: 0,
                    height: 0
                };
            } else {
                Cp.height = DE;
            }

            Cp.x = 0;
            Cp.y = -Cr.height;

            Cp.height += this.Types.Misc.SHADOW_PIXELS;

            var DM = true;
            var baseLine;
            var justification = this.Types.TextAlign.JUSTIFY_CENTER;
            switch (HO) {
                case this.client.Types.OnScreenTextCode.ID_STATUS_IN_UPPER_LEFT_WHITE:
                    baseLine = {
                        x: 0,
                        y: 0
                    };
                    HU = "white";
                    justification = this.Types.TextAlign.JUSTIFY_LEFT;

                    if (text === "You die.")
                        this.client.died = true;

                    break;
                case this.client.Types.OnScreenTextCode.ID_STATS_IN_LOWER_LEFT_WHITE:
                    baseLine = {
                        x: 0,
                        y: this.height
                    };
                    HU = "white";
                    justification = this.Types.TextAlign.JUSTIFY_LEFT;
                    break;
                case this.client.Types.OnScreenTextCode.ID_HINTS_IN_LOWER_LEFT_YELLOW:
                    baseLine = {
                        x: 0,
                        y: this.height
                    };
                    HU = "rgba(255,252,191,1)";
                    justification = this.Types.TextAlign.JUSTIFY_LEFT;
                    break;
                default:
                    if (HS) {
                        DM = false;
                        baseLine = {
                            x: HP - ~~(Cp.width / 2),
                            y: ~~(this.height / 2) + Cr.descent
                        };
                    } else {
                        baseLine = {
                            x: HP - ~~(Cp.width / 2),
                            y: HQ - Cp.height
                        };
                    }
                    break;
            }

            baseLine.y -= Cr.height * HR;

            if (DM)
                this.forceTextOnScreen(baseLine, Cp, Cr);

            var newText = this.createOnScreenText(text, justification, DI, baseLine, Cp, HU, HV, specialAttributes);
            //pass all new text that is to be written to the screen to a handler,
            //so that all text can be analyzed in O(N) Time.
            //if autoFollow is enabled and a target is found, call the function
            this.handleIncomingText(newText);
            if (app.game.autoFollowBool) {
               this.autoFollow()
            }
            
            if (!this.allOnScreenText)
                this.allOnScreenText = {};
            this.allOnScreenText[HO] = newText;
            DL.push(newText);
        } else if (this.allOnScreenText) {
            delete this.allOnScreenText[HO];
        }
    }

    return this.determineRepaintArea(DL);
};

SubWindow.prototype.forceTextOnScreen = function forceTextOnScreen(baseLine, textRect, Cr) {
    var rightEdge = this.width;
    if (baseLine.x + textRect.width + this.textRightGap > rightEdge)
        baseLine.x = rightEdge - (textRect.width + this.textRightGap);
    if (baseLine.y + Cr.descent + this.textBottomGap > this.height)
        baseLine.y = this.height - (Cr.descent + this.textBottomGap);
    if (baseLine.x < this.textLeftGap)
        baseLine.x = this.textLeftGap;
    if (baseLine.y < this.textTopGap + Cr.ascent)
        baseLine.y = this.textTopGap + Cr.ascent;
};

SubWindow.prototype.determineRepaintArea = function determineRepaintArea(DB) {
    var Ct = 4294967295;
    var Cu = Ct;
    var Cv = -4294967295;
    var Cw = Cv;

    for (var i = 0, iMax = DB.length; i < iMax; ++i) {
        var text = DB[i];
        var left = text.baseLine.x + text.textBoundsInSubWindow.x;
        var right = text.baseLine.x + text.textBoundsInSubWindow.x + text.textBoundsInSubWindow.width;
        var top = text.baseLine.y + text.textBoundsInSubWindow.y;
        var bottom = text.baseLine.y + text.textBoundsInSubWindow.y + text.textBoundsInSubWindow.height;
        if (left < Ct)
            Ct = left;
        if (right > Cv)
            Cv = right;
        if (top < Cu)
            Cu = top;
        if (bottom > Cw)
            Cw = bottom;
    }

    var rect = {};

    var DN = 1 + Math.ceil(this.client.fonts[this.client.Types.Font.PLAIN_TEXT].height / 6);

    rect.x = this.x + Ct + -DN;
    rect.y = this.y + Cu - DN;
    rect.width = Cv - Ct + 2 * DN;
    rect.height = Cw - Cu + 2 * DN;

    return rect;
};

SubWindow.prototype.getLines = function getLines(s) {
    var Gz = new Array();
    if (!s) return Gz;

    var start = 0;
    for (var i = s.length - 1; i >= 0; --i) {
        var next = s.indexOf('\n', start);
        if (next < 0) {
            Gz.push(s.substring(start));
            break;
        }
        Gz.push(s.substring(start, next));
        start = next + 1;
    }
    return Gz;
};
var app;

function startNewGame() {
    if (app && app.game)
        app.newGame();
}
