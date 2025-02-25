stack<int> st;
void _TopoSort(int node, vector<int> &vis, vector<vector<int>> adj) {
    vis[node] = 1;
    for (auto child : adj[node]) {
        if (!vis[child]) {
            vis[child] = 1;
            _TopoSort(child, vis, adj);
        }
    }
    // Node has been processed
    st.push(node); // ? Simple Change
    return;
}

vector<int> TopoSort(int n, vector<vector<int>> adj) {
    vector<int> vis(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        if (!vis[i]) {
            _TopoSort(i, vis, adj);
        }
    }
    vector<int> res;
    while (!st.empty()) {
        res.push_back(st.top());
        st.pop();
    }
    return res;
}

// 7.2 Kahn Algo Topological Sort (BFS) Iterative
vector<int> Kahn(int n, vector<vector<int>> adj) {
    vector<int> in(n + 1, 0);
    for (int i = 1; i <= n; i++) {
        for (auto child : adj[i]) { // go to all children of node i
            in[child]++;
        }
    }
    queue<int> q;
    // Initialize queue with all vertices with indegree 0
    for (int i = 1; i <= n; i++) {
        if (in[i] == 0)
            q.push(i);
    }
    vector<int> res;
    while (!q.empty()) {
        int node = q.front();
        q.pop();
        res.push_back(node);
        for (auto child : adj[node]) {
            in[child]--;
            if (in[child] == 0) // Push to queue if indegree is 0
                q.push(child);
        }
    }
    return res;
}