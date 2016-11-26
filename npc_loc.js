function(c, a) { // f:#s.npc.public, h:#s.npc.members, pos:1
  var c, d, m, n, i, l, p, o, r, s, u, v, w, b, d, x = {},
    j = [],
    k = [],
    q = [],
    _ = (a, b) => { a.forEach(b) },
    z = a.h ? [/-(\w+)w/, /\n(\w+) of p/] :
      [/ject ([a-zA-Z_.]*) /, /e for ([a-z_0-9.]+)\. /, /on([a-z()0-9_]+)pr/];
  r = a.f.call();
  p = /(\w+) \|/.exec(r)[1];
  o = /\| (\w+) \W /.exec(r)[1];
  r = a.f.call({});
  v = /(\w+):"\w/.exec(r)[1];
  u = /:"(\w+)"$/.exec(r)[1];
  x[v] = o;
  r = a.f.call(x);
  w = /y (\w+) an/.exec(r)[1];
  x[v] = p;
  r = a.f.call(x);
  _(r, r => {
    _(z, z => {
      b = z.exec(r);
      if (b) j.push(b[1])
    })
  })
  if (!a.h) {
    x[v] = u;
    x.password = x.pass = x.p = w;
    _(j, j => {
      x.project = j;
      r = a.f.call(x);
      _(r, r => {
        if (/^\w+\.\w+$/.exec(r))
          k.push(r)
      })
    })
    return k;
  }
  x={};
  x.username=j[a.pos-1];
  r = a.h.call(x);
  d = /!(\w+)!/.exec(r);
  if(d) {
    x[d[1]] = "order_qrs";
    r = a.h.call(x);
  }
  n=r.length;
  for (m=0;m<n;m++) {
    l=r[m].indexOf("\n")
    if (l>0) {
      c=r[m].split("\n");
      for(i=0;i<(l/2);i+=2) {
        q[i] = new Array(l);
        q[i+1] = new Array(l);
        for(j=0;j<l;j++) {
          if(c[i][j]=="█") 
            q[i][j]=1, q[i+1][j]=1;
          if(c[i][j]=="▄")
            q[i][j]=0, q[i+1][j]=1;
          if(c[i][j]=="▀")
            i==(l/2)-1 ? q[i][j]=1 :
              q[i][j]=1, q[i+1][j]=0;
          if(c[i][j]==" ")
            i==(l/2)-1 ? q[i][j]=0 :
              q[i][j]=0, q[i+1][j]=0;
        }
      }
      return q;
    }
  }
return r;
}