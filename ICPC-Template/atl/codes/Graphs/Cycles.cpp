
// 4.1 Cycle Detection in Undirected Graph
// using DFS

bool _detectCycle(int node, int parent, vector<int> &vis, vector<vector<int>> &adj) {
    vis[node] = 1;
    for (auto child : adj[node]) {
        if (!vis[child])
            if (_detectCycle(child, node, vis, adj))
                return true;
        if (vis[child] && parent != child) // child already visited and parent is not child
            return true;
    }
    return false;
}

bool detectCycle(vector<vector<int>> &adj, int n) {
    vector<int> vis(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        if (!vis[i]) {
            if (_detectCycle(i, -1, vis, adj))
                return true;
        }
    }
    return false;
}

//! 4.2 Length of shortest Cycle in Undirected Graph using BFS
class Solution {
public:
    int ans = 1e9;
    int findShortestCycle(int n, vector<vector<int>> &edges) {
        vector<int> graph[n];
        for (auto &e : edges) {
            graph[e[0]].push_back(e[1]);
            graph[e[1]].push_back(e[0]);
        }
        for (int i = 0; i < n; i++) { // for all components
            vector<int> dist(n, 1e9);
            queue<pair<int, int>> q; // {node,par}
            q.push({i, -1});
            dist[i] = 0;
            while (!q.empty()) {
                auto [u, par] = q.front();
                q.pop();
                for (auto v : graph[u]) {
                    if (dist[v] == 1e9) { // not visited
                        dist[v] = dist[u] + 1;
                        q.push({v, u});
                    } else if (par != v) {                     // visited and not parent
                        ans = min(ans, dist[u] + dist[v] + 1); // left sum + right sum + 1 (edge between u and v)
                    }
                }
            }
        }
        return ans == 1e9 ? -1 : ans;
    }
};


// 6. Cycle Detection in Directed Graph using DFS
// Idea - if a node is already visited and is in the current path then there is a cycle
// https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1

class Solution {
public:
    bool dfs(int node, vector<vector<int>> &adj, vector<int> &vis, vector<int> &pathVis) {
        vis[node] = 1;
        pathVis[node] = 1;
        for (auto child : adj[node]) {
            if (!vis[child]) {
                if (dfs(child, adj, vis, pathVis))
                    return true;
            }
            if (vis[child] && pathVis[child])
                return true;
        }
        // backtracking step
        pathVis[node] = 0;
        return false;
    }

    bool CycleDetectionDirected(int n, vector<vector<int>> &adj) {
        vector<int> vis(n + 1);
        vector<int> pathVis(n + 1);
        for (int i = 1; i <= n; i++) {
            if (!vis[i])
                if (dfs(i, adj, vis, pathVis))
                    return true;
        }
        return false;
    }
};
