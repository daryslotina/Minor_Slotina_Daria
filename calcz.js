<html>
<head>
<title>calcz.js</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style type="text.css">
.s0 { color: #cf8e6d;}
.s1 { color: #bcbec4;}
.s2 { color: #6aab73;}
</style>
</head>
<body bgcolor="#1e1f22">
<table CELLSPACING=0 CELLPADDING=5 COLS=1 WIDTH="100%" BGCOLOR="#606060" >
<tr><td><center>
<font face="Arial, Helvetica" color="#000000">
calcz.js</font>
</center></td></tr></table>
<pre><span class="s0">function </span><span class="s1">calcz(x, y)</span>
<span class="s1">{ const x1 = document.getElementById(</span><span class="s2">&quot;x&quot;</span><span class="s1">);</span>
  <span class="s1">const y1 = document.getElementById(</span><span class="s2">&quot;y&quot;</span><span class="s1">);</span>
  <span class="s1">x1 = parseFloat(x.InnerText);</span>
  <span class="s1">y1 = parseFloat(y.InnerText);</span>
  <span class="s0">if </span><span class="s1">(x &gt; y){</span>
   <span class="s1">f.res.value = x * y}</span>
   <span class="s0">else </span><span class="s1">{</span>
   <span class="s1">f.res.value = Math.log1p(x + y); }</span>
   <span class="s0">return </span><span class="s1">Z;</span>
  <span class="s1">}</span></pre>
</body>
</html>
