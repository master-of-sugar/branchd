# branchd
Gitのローカルブランチをお掃除するツールです

[![npm version](https://badge.fury.io/js/branchd.svg)](https://badge.fury.io/js/branchd)

## インストール

```
npm install -g branchd

```

## 使い方

#### git管理ディレクトリに移動する

```
cd /path/to/git_repository
```

#### branchdコマンド実行

```
branchd
```

#### カレントブランチが表示される

```
Current branch is [unit_test]
```

#### ブランチを消してもよいか聞かれる

```
Delete branch [design3]?(yes)/n : 
```
 - エンターキー => 削除実行
 - `n` または `N` => スキップ



### notice
 - `-D` オプションで強制的に削除します
 - `master` `develop` およびカレントブランチは無視されます

