// BFS in undirected Graph (Edge weight = 1)

int shortestDist(int source, int dest, vector<vector<int>> adj) {
    int n = adj.size();
    vector<int> dist(n + 1, 1e9);
    queue<int> q;

    q.push(source);
    dist[source] = 0;

    while (!q.empty()) {
        int curr = q.front();
        q.pop();

        for (auto child : adj[curr]) {
            if (dist[child] == 1e9) {
                dist[child] = dist[curr] + 1;
                q.push(child);
            }
        }
    }
    return dist[dest];
}

// 1. Dijsktra - Shortest Path in Undirected Weighted Graphs
//
int dijkstra(int source, int dest, vector<vector<pair<int, int>>> adj) {
    int n = adj.size();
    vector<int> dist(n + 1, 1e9);
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    pq.push({0, source}); // {dist, node}
    dist[source] = 0;
    while (!pq.empty()) {
        auto [node, wt] = pq.top();
        pq.pop();
        for (auto child : adj[node]) {
            auto [childNode, childWt] = child;
            if (dist[childNode] > dist[node] + childWt) { // Relaxation
                dist[childNode] = dist[node] + childWt;
                pq.push({childNode, dist[childNode]});
            }
        }
    }
    return dist[dest];
    // vector<int> path;
    // int curr = dest;
    // while (curr != -1) {
    //     path.push_back(curr);
    //     curr = parent[curr];
    // }
    // reverse(path.begin(), path.end());
    // return path;
} // O(nlogn)

// 3
vector<vector<int>> floydWarshall(vector<vector<int>> adj) {
    int n = adj.size();
    vector<vector<int>> dist(n, vector<int>(n, 1e9));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (i == j)
                dist[i][j] = 0;
            else if (adj[i][j] != -1)
                dist[i][j] = adj[i][j];
        }
    }
    for (int k = 0; k < n; k++) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j])
                    dist[i][j] = dist[i][k] + dist[k][j];
            }
        }
    }
    return dist;
}
