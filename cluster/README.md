Run command: 
```echo "GET http://localhost:3001/api/no-cluster" | vegeta attack -duration=30s -rate=50 | vegeta report --type=text```

Run command: 
```echo "GET http://localhost:3001/api/cluster" | vegeta attack -duration=30s -rate=50 | vegeta report --type=text```

