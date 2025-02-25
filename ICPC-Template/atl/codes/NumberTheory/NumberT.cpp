// ------ NUMBER THEORY ------
string bin(int n) { return bitset<32>(n).to_string(); }
// binary of n

int isPrime(int a) {
    if (a == 1)
        return 0;
    for (int i = 2; i * i <= a; i++) {
        if (a % i == 0)
            return 0;
    }
    return 1;
}
// O(sqrt(n))

int GCD_extended(int a, int b, int &x, int &y) {
    x = 1, y = 0;
    int x1 = 0, y1 = 1, a1 = a, b1 = b;
    while (b1) {
        int q = a1 / b1;
        tie(x, x1) = make_tuple(x1, x - q * x1);
        tie(y, y1) = make_tuple(y1, y - q * y1);
        tie(a1, b1) = make_tuple(b1, a1 - q * b1);
    }
    return a1;
}
// return gcd(a, b), and x, y such that ax + by = gcd(a, b)

int binaryExponentiation(int x, int n) {
    if (n == 0) {
        return 1;
    } else if (n % 2 == 0) {
        return binaryExponentiation(x * x, n / 2);
    } else {
        return x * binaryExponentiation(x * x, (n - 1) / 2);
    }
}
// x^n in O(log n)

int binaryExponentiation_mod(int r, int y, int p) {
    int res = 1;
    r = r % p;
    while (y > 0) {
        if (y & 1) {
            res = (res * r) % p;
        }
        y = y >> 1;
        r = (r * r) % p;
    }
    return res;
}
// r^y mod p in O(log y)

vector<int> primeFactorisation(int n) {
    vector<int> v;
    while (n % 2 == 0) {
        v.push_back(2);
        n = n / 2;
    }
    for (int i = 3; i <= sqrt(n); i = i + 2) {
        while (n % i == 0) {
            v.push_back(i);
            n = n / i;
        }
    }
    if (n > 2)
        v.push_back(n);
    return v;
} // O(sqrt(N)) , 24 = 2^3 * 3^1

vector<int> All_divisors(int n) {
    vector<int> v;
    for (int i = 1; i * i <= n; ++i) {
        if (n % i == 0) {
            v.push_back(i);
        }
    }
    for (int i = (int)sqrt(n); i >= 1; --i) {
        if (n % i == 0) {
            if (n / i != i) {
                v.push_back(n / i);
            }
        }
    }
    return v;
} // O(sqrtN), 24 = {1,2,3,4,6,8,12,24}

vector<int> SieveOfEratosthenes(int n) {
    bool prime[n + 1];
    memset(prime, true, sizeof(prime));
    for (int p = 2; p * p <= n; p++) {
        if (prime[p] == true) {
            for (int i = p * p; i <= n; i += p)
                prime[i] = false;
        }
    }
    vector<int> v;
    for (int p = 2; p <= n; p++)
        if (prime[p]) {
            v.push_back(p);
        };
    return v;
} // O(Nlog(logN)) , generate all prime numbers till n

vector<int> primeFactors(int n) {
    vector<int> v;
    for (int i = 2; i * i <= n; i++) {
        while (n % i == 0) {
            v.push_back(i);
            n = n / i;
        }
    }
    if (n > 1)
        v.push_back(n);
    v.erase(unique(v.begin(), v.end()), v.end());
    return v;
}
// O(sqrt(N)), 24 = {2,3}