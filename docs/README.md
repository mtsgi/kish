# kishドキュメント

kishはkitのための強力なシェルです。

### kishをはじめる

リリース一覧からダウンロードし、kitディレクトリの`app`内またはkitディレクトリ外の任意の場所に配置してください。

- [リリース一覧 - GitHub](https://github.com/mtsgi/kish/releases)
- [リリースノート](/releasenote)

kitのインストールウィザードからkishを配置したディレクトリのパスを入力してインストールしてください。

### kptからインストール

カーネルにバンドルされたkish(v0.5以降)から**kpt**を使って、任意のバージョンのkishをインストールすることができます。

`kpt search`コマンドで利用可能なkishのバージョン一覧を確認できます。

```kish
🥧 kpt search kish
```

`kpt install`コマンドでkitにインストールできます。

```kish
🥧 kpt search kish 0.5
```


### オンラインアプリとして

kitのアプリインストーラーを使用することで、オンライン上のkishリポジトリをインストールすることができます。

`install`アプリを起動し、`https://mtsgi.github.io/kish/`をインストールします。

または、kitにバンドルされたkishがある場合、kishから下記のコマンドを実行することでオンラインのバージョンのkishをインストールすることも可能です。

```kish
🥧 install https://mtsgi.github.io/kish/
```

### Sightreから呼び出す

kitバージョンv0.2.1以降では、Sightreと呼ばれる検索ボックスにkishを呼び出す機能が統合されています。

`kish echo hello`または、`🥧 echo hello`のように、実行するkishコマンドの接頭辞として`kish`か`🥧`をつけることで起動することができます。

> Sightreから呼び出されるアプリは、`app/kish`ディレクトリ内の(kitシステムにバンドルされた)kishになります。
