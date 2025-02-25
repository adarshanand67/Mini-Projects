// 9.2 Diameter of a tree
// Finding the longest path in a tree using 2 dfs

int _dia(int node, int par, vector<vector<int>> &adj, vector<int> &dist) {
    int farthestNode = node;
    for (auto child : adj[node]) {
        if (child != par) {
            dist[child] = dist[node] + 1;
            int farthestChild = _dia(child, node, adj, dist);
            if (dist[farthestChild] > dist[farthestNode])
                farthestNode = farthestChild;
        }
    }
    return farthestNode;
}

int diameter(vector<vector<int>> &adj) {
    int n = adj.size();
    vector<int> dist(n + 1, 0);
    int farthestNode = _dia(1, -1, adj, dist);
    dist.assign(n + 1, 0);
    return _dia(farthestNode, -1, adj, dist);
}
