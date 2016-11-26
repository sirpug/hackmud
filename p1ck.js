function(b, a) { // t:#s.npc.loc
  var i = 0,
    s, v, r, p, P = "",
    c = {},
    n = "!EZ_21|!EZ_35|!EZ_40|k c|c001!|c002!|c003!|r n|!con_spec|!acct_nt|!sn_w_glock|!d|t d|pr|r_d|2_c|3_t",
    N = n.split("|"),
    X = ["open", "release", "unlock"],
    Y = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97],
    Z = "purple0blue0cyan0green0lime0yellow0orange0red".split(0);
  while (v = (r = a.t.call(c)).match(n)) {
    s = N.indexOf(v[0]);
    if (s >= 0 && s < 3) c[p = N[s].substr(1)] = X[i % 3];
    if (s == 3) c[p] = X[i % 3];
    if (s > 3 && s < 7) c[p = N[s].substr(0, 4)] = Z[i % 8];
    if (s == 7) c[p] = Z[i % 8];
    if (s == 8) return "con_spec";
    if (s == 9) return "acct_nt";
    if (s == 10) return "sn_w_glock";
    if (s > 10 && s < 13) c.digit = i % 10;
    if (s == 13) c.ez_prime = Y[i % 25];
    if (s == 14) c.color_digit = c.c001.length;
    if (s == 15) c.c002_complement = Z[(Z.indexOf(c.c002) + 4) % 8];
    if (s == 16) c.c003_triad_1 = Z[(Z.indexOf(c.c003) + 3) % 8], c.c003_triad_2 = Z[(Z.indexOf(c.c003) + 5) % 8];
    i++
  }
  return r
}