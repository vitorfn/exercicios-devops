Lista 3

- Exercício 1)

```
kind create cluster
kind delete cluster
kind create cluster
kubectl get nodes
cd pods/
kubectl apply -f my-first-pod.yaml 
kubectl get pods
```

Saída:
```
[17:17:27] : aluno@DCC01-10 [~/Área de Trabalho/exercicio-devops/pods] $ kubectl get pods
NAME           READY   STATUS    RESTARTS   AGE
my-first-pod   1/1     Running   0          48s
```
```
kubectl describe pod my-first-pod
```

Saída:
```
[17:18:03] : aluno@DCC01-10 [~/Área de Trabalho/exercicio-devops/pods] $ kubectl describe pod my-first-pod
Name:             my-first-pod
Namespace:        default
Priority:         0
Service Account:  default
Node:             kind-control-plane/172.18.0.2
Start Time:       Wed, 04 Oct 2023 17:17:15 -0300
Labels:           app=my-first-pod
Annotations:      <none>
Status:           Running
IP:               10.244.0.6
...
```

```
kubectl port-forward pod/meuprimeiropod 8080:80
kubectl delete pod my-first-pod
```

Saída:
```
pod "my-first-pod" deleted
```


- Exercício 2)

```
cd replicaset/
kubectl apply -f my-replica-set.yaml 
kubectl get pods
```

Saída:

```
[17:25:41] : aluno@DCC01-10 [~/Área de Trabalho/exercicio-devops replicaset] $ kubectl get pods
NAME                   READY   STATUS    RESTARTS   AGE
my-replica-set-5tqz2   1/1     Running   0          48s
my-replica-set-sfg79   1/1     Running   0          48s
my-replica-set-xpsmr   1/1     Running   0          48s
```

```
kubectl port-forward pod/meuprimeiropod 8080:80
```

```
kubectl delete replicaset my-replica-set
```
Saída:
```
replicaset.apps "my-replica-set" deleted
```

- Exercício 3)

```
cd deployment/
kubectl apply -f my-deployment.yaml 
kubectl get pods
```

Saída:
```
[17:38:34] : aluno@DCC01-10 [~/Área de Trabalho/exercicio-devops/deployment] $ kubectl get pods
NAME                             READY   STATUS    RESTARTS   AGE
my-deployment-69444b8677-9bl4j   1/1     Running   0          67s
my-deployment-69444b8677-gq6mb   1/1     Running   0          67s
my-deployment-69444b8677-vq8p6   1/1     Running   0          67s
```

```
kubectl describe deployment my-deployment
```

Saída:
```
[17:39:15] : aluno@DCC01-10 [~/Área de Trabalho/exercicio-devops/deployment] $ kubectl describe deployment my-deployment
Name:                   my-deployment
Namespace:              default
CreationTimestamp:      Wed, 04 Oct 2023 17:38:07 -0300
Labels:                 app=my-deployment
Annotations:            deployment.kubernetes.io/revision: 1
Selector:               app=my-deployment
Replicas:               3 desired | 3 updated | 3 total | 3 available | 0 unavailable
StrategyType:           RollingUpdate
MinReadySeconds:        0
RollingUpdateStrategy:  25% max unavailable, 25% max surge
Pod Template:
  Labels:  app=my-deployment
  Containers:
   my-deployment:
    Image:      nginx:1.14.2
```
```
kubectl get pods
```
Saída:
```
[17:42:33] : aluno@DCC01-10 [~/Área de Trabalho/exercicio-devops/deployment] $ kubectl get pods
NAME                             READY   STATUS              RESTARTS   AGE
my-deployment-69444b8677-9bl4j   1/1     Running             0          4m26s
my-deployment-69444b8677-vq8p6   1/1     Running             0          4m26s
my-deployment-858c4dcbb8-bpl4v   0/1     ContainerCreating   0          1s
my-deployment-858c4dcbb8-tmh6p   1/1     Running             0          21s
```

```
kubectl rollout undo deployment/my-deployment
```

Saída:
```
[17:42:34] : aluno@DCC01-10 [~/Área de Trabalho/exercicio-devops/deployment] $ kubectl rollout undo deployment/my-deployment
deployment.apps/my-deployment rolled back
```

```
kubectl delete deployment my-deployment
```

Saída:
```
[17:44:21] : aluno@DCC01-10 [~/Área de Trabalho/exercicio-devops/deployment] $ kubectl delete deployment my-deployment
deployment.apps "my-deployment" deleted
```