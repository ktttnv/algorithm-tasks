// https://codeforces.com/gym/100099/attachments - task D

#pragma warning(disable: 4996);
#pragma warning(disable: 6031);

#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main()
{
	freopen("tickets.in", "r", stdin);
	freopen("tickets.out", "w", stdout);

	int N;
	cin >> N;

	vector<pair<int, int>> v;

	for (int i = 0; i < N; i++) {
		int ch, min, sec, sec1, sec2;

		cin >> ch >> min >> sec;
		sec1 = (ch * 60 + min) * 60 + sec;
		v.push_back({ sec1, 1 });

		cin >> ch >> min >> sec;
		sec2 = (ch * 60 + min) * 60 + sec;
		if (sec2 <= sec1) {
			v.push_back({ 24 * 60 * 60, -1 });
			v.push_back({ 0, 1 });
			v.push_back({ sec2, -1 });
		}
		else {
			v.push_back({ sec2, -1 });
		}
	}

	sort(v.begin(), v.end());

	int ind = 0;
	int sum = 0;

	int start = 0, finish = 0;

	for (int i = 0; i < v.size(); i++) {
		if (v[i].second == 1) {
			ind++;
			if (ind == N) {
				start = v[i].first;
			}
		}
		else {
			ind--;
			if (ind == N - 1) {
				finish = v[i].first;
				sum += (finish - start);
			}
		}
	}

	cout << sum;

	return 0;
}
