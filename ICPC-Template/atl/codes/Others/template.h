/* Adarsh Anand */
/* This too shall pass */
#include <bits/stdc++.h>
using namespace std;
#define int long long
#define ll long long
const int INF=1e18,N=1e5+5,MOD1=1e9+7,MOD2=998244353,EPS=1e-9;
void __print(int x) { cerr << x; } void __print(long x) { cerr << x; } void __print(unsigned x) { cerr << x; } void __print(unsigned long x) { cerr << x; } void __print(unsigned long long x) { cerr << x; } void __print(float x) { cerr << x; } void __print(double x) { cerr << x; } void __print(long double x) { cerr << x; } void __print(char x) { cerr << '\'' << x << '\''; } void __print(const char *x) { cerr << '\"' << x << '\"'; } void __print(const string &x) { cerr << '\"' << x << '\"'; } void __print(bool x) { cerr << (x ? "true" : "false"); } template <typename T, typename V> void __print(const pair<T, V> &x) { cerr << '{'; __print(x.first); cerr << ','; __print(x.second); cerr << '}'; } template <typename T> void __print(const T &x) { int f = 0; cerr << '{'; for (auto &i : x) cerr << (f++ ? "," : ""), __print(i); cerr << "}"; } void _print() { cerr << "]\n"; } template <typename T, typename... V> void _print(T t, V... v) { __print(t); if (sizeof...(v)) cerr << ", "; _print(v...); }
template  <typename T1, typename T2> istream& operator>>(istream& istream, pair<T1, T2>& p) { return (istream >> p.first >> p.second); } template <typename T> istream& operator>>(istream& istream, vector<T>& v) { for (auto& it : v) cin >> it; return istream; } template <typename T1, typename T2> ostream& operator<<(ostream& ostream, const pair<T1, T2>& p) { return (ostream << p.first << " " << p.second); } template <typename T> ostream& operator<<(ostream& ostream, const vector<T>& c) { for (auto& it : c) cout << it << " "; return ostream; }
#ifndef ONLINE_JUDGE
#define debug(x...) cerr<<"["<<#x<<"] = ["; _print(x)
#else
#define debug(x...)
#endif

void solve(){
    
}

signed main() {
    ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL);
    cout << setprecision(12) << fixed; int t=1;
    cin >> t;
    while (t--) { solve(); cerr<<"------------------"<<endl; }
}