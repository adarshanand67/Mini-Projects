// Graph Colouring (Main topic)
// 5.1 Bipartite Graphs - should not have odd length cycle, can be coloured using 2 adjacent colors

class Solution {
public:
    bool dfs(int node, vector<int> &vis, vector<vector<int>> &graph, int color) {
        vis[node] = color;
        for (auto child : graph[node]) {
            if (vis[child] == -1) { // unvisited call dfs
                if (!dfs(child, vis, graph, 1 - color))
                    return false;
            } else if (vis[child] == color) // already visited and same color
                return false;
        }
        return true;
    }
    bool isBipartite(vector<vector<int>> &graph) {
        int n = graph.size();
        int UNVISITED = -1, RED = 0, BLUE = 1;
        vector<int> vis(n, UNVISITED);
        for (int i = 0; i < n; i++) {
            if (vis[i] == UNVISITED) {
                if (!dfs(i, vis, graph, RED))
                    return false;
            }
        }
        return true;
    }
};

// 5.2 Bipartite coloring using BFS
class Solution {
public:
    bool isBipartite(vector<vector<int>> &graph) {
        int n = graph.size();
        int UNVISITED = -1, RED = 0, BLUE = 1;
        vector<int> color(n, UNVISITED);
        for (int i = 0; i < n; i++) { // running for all components
            queue<int> q;
            q.push(i);
            color[i] = RED;
            while (!q.empty()) {
                int node = q.front();
                q.pop();
                for (auto child : graph[node]) {
                    if (color[child] == UNVISITED) {
                        color[child] = 1 - color[node];
                        q.push(child);
                    } else if (color[child] == color[node])
                        return false;
                }
            }
        }
        return true;
    }
};


