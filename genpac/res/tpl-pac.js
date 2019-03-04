/**
 * __GENPAC__
 * Generated: __GENERATED__
 * GFWList Last-Modified: __MODIFIED__
 * GFWList From: __GFWLIST_FROM__
 */

let directList = __IGNORED_DOMAINS__
let gfwedList = __GFWED_DOMAINS__

directList = new Set(directList)
gfwedList = new Set(gfwedList)

const PROXY = '__PROXY__';
const DIRECT = "DIRECT"

function FindProxyForURL(url, host) {
    res = testHost(host);
    if (res) return res
    return DIRECT
}

function testHost(host) {
    if (checkRulesFast(host, directList)) return DIRECT
    if (checkRulesFast(host, gfwedList)) return PROXY
    return null
}

function checkRulesFast(host, rules) {
    do {
        if (rules.has(host)) return true
        off = host.indexOf(".") + 1
        host = host.slice(off)
    } while (off >= 1)
    return false
}
