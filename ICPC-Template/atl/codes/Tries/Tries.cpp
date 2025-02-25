struct Node {
    Node *links[26];
    bool flag = false;

    bool hasKey(char c) {
        return links[c - 'a'] != NULL;
    }
    void insertKey(char c, Node *node) {
        links[c - 'a'] = node;
    }
    Node *next(char c) {
        return links[c - 'a'];
    }
    void setTrue() {
        flag = true;
    }
};

class Trie {
private:
    Node *root;

public:
    Trie() {
        root = new Node();
    }

    void insert(string word) {
        Node *node = root;
        for (char c : word) {
            if (!(node->hasKey(c))) {
                node->insertKey(c, new Node());
            }
            // go next node
            node = node->next(c);
        }
        node->setTrue();
    }

    bool search(string word) {
        Node *node = root;
        for (char c : word) {
            if (!(node->hasKey(c))) {
                return false;
            }
            // go next node
            node = node->next(c);
        }
        return node->flag;
    }

    bool startsWith(string prefix) {
        Node *node = root;
        for (char c : prefix) {
            if (!(node->hasKey(c))) {
                return false;
            }
            // go next node
            node = node->next(c);
        }
        return true;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */
