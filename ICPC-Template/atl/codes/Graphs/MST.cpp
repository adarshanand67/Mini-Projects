// Kruskal's Algorithm

int kruksal(vector<vector<int>> graph) {
    int n = graph.size();
    DSU dsu(n);
    sort(graph.begin(), graph.end(), [](vector<int> &a, vector<int> &b) {
        return a[2] < b[2]; // sort edges in increasing order of weight
    });
    int ans = 0;
    for (auto edge : graph) {
        int u = edge[0], v = edge[1], wt = edge[2];
        if (dsu.find(u) != dsu.find(v)) { // u, v in different components
            dsu.union_set(u, v);
            ans += wt;
        }
    }
    return ans; // Return the weight of the MST
}

// Prims
int prim(vector<vector<int>> graph) {
    int n = graph.size();
    vector<int> dist(n, 1e9);
    vector<bool> vis(n, false);
    dist[0] = 0;
    int src = 0;
    int ans = 0;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, src}); // {dist, node}
    while (!pq.empty()) {
        auto [d, node] = pq.top();
        pq.pop();
        if (vis[node])
            continue;
        vis[node] = true;
        ans += d;
        for (int i = 0; i < n; i++) {
            if (graph[node][i] != -1 && !vis[i]) {
                if (graph[node][i] < dist[i]) {
                    dist[i] = graph[node][i];
                    pq.push({dist[i], i});
                }
            }
        }
    }
    return ans; // Return the weight of the MST
}