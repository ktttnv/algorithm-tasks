// https://codeforces.com/gym/102139/problem/A

#include<iostream>
#include<vector>
#include<string>
#include<cmath>
#include<algorithm>

using namespace std;

int main() {
    int N, l, r;
    cin >> N >> l >> r;

    if (N == 0) {
        cout << "YES";
        return 0;
    }

    vector<int> v;

    while (N != 0) {
        v.push_back(N % 2);
        N /= 2;
    }

    for (int i = l; i <= r && i < v.size(); i++) {
        if (v[i] == 1) {
            cout << "NO";
            return 0;
        }
    }

    cout << "YES";
    return 0;
}
