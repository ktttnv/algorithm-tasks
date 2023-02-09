// https://codeforces.com/gym/100133/attachments - task B

#include<iostream>
#include<string>
#include<set>

using namespace std;

int main() {
	freopen("unequal.in", "r", stdin);
	freopen("unequal.out", "w", stdout);

	string s;
	cin >> s;

	set<string> setSub;

	for (int i = 1; i <= s.size(); i++) {
		for (int j = 0; j < s.size() - i + 1; j++) {
			string sub = s.substr(j, i);
			setSub.insert(sub);
		}
	}

	cout << setSub.size() << endl;

	return 0;
}
