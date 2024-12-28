public class Player {
    public string name;
    public int health;

    public Player(string playerName, int playerHealth) {
        name = playerName;
        health = playerHealth;
    }
}

 Player CreatePlayer() {
    // Yeni bir oyuncu nesnesi yaratıp geri döndüren fonksiyon
    return new Player("Player1", 100);
}

// Kullanımı
Player myPlayer = CreatePlayer();
Debug.Log("Player Name: " + myPlayer.name); // Player Name: Player1
