# Made by Adarsh Anand -> FCC pygame

import pygame
import random
import math
from pygame import mixer

# Initialize pygame
pygame.init()

# Creating the screen size width , height
screen = pygame.display.set_mode((800, 600))

# Title and icon
pygame.display.set_caption("Space invader")
icon = pygame.image.load("launch.png")
pygame.display.set_icon(icon)

# Background
background = pygame.image.load("space.jpg")
background = pygame.transform.smoothscale(background, (800, 600))

# Player, Load the image
playerImg = pygame.image.load("space-invaders.png")
playerImg = pygame.transform.smoothscale(playerImg, (64, 64))
# Setting x and y coordinates
playerX = 370
playerY = 480
playerX_change = 0

# Enemy
enemyImg = []
enemyX = []
enemyY = []
enemyX_change = []
enemyY_change = []
num_of_enemies = 6
for i in range(num_of_enemies):
    photo = pygame.image.load('monster.png')
    photo = pygame.transform.smoothscale(photo, (64, 64))
    enemyImg.append(photo)
    enemyX.append(random.randint(0, 736))
    enemyY.append(random.randint(50, 150))
    enemyX_change.append(0.3)
    enemyY_change.append(40)

# Bullet
bulletImg = pygame.image.load("bullet.png")
bulletImg = pygame.transform.smoothscale(bulletImg, (32, 32))
bulletX = 0
bulletY = 480
bulletX_change = 0
bulletY_change = 2

# score_val
score_val = 0
font = pygame.font.Font("freesansbold.ttf", 32)
textX = 10
textY = 10


# Game Over
# Showing game is over
over_font = pygame.font.Font('freesansbold.ttf', 64)


def player(x, y):
    # Draw image to the screen
    screen.blit(playerImg, (x, y))


def enemy(x, y, i):
    # Draw image to the screen
    # Which enemy to show
    screen.blit(enemyImg[i], (x, y))


# Ready - cant see the bullet on the screen
bullet_state = 'ready'
# Fire-bullet is moving


def fire_bullet(x, y):
    global bullet_state
    bullet_state = "fire"
    screen.blit(bulletImg, (x+16, y+10))


def isCollision(enemyX, enemyY, bulletX, bulletY):
    distance = math.sqrt(math.pow(enemyX - bulletX, 2) +
                         (math.pow(enemyY - bulletY, 2)))
    if distance < 27:
        return True
    else:
        return False


def show_score(x, y):
    score = font.render("Score : " + str(score_val), True, (255, 255, 0))
    screen.blit(score, (x, y))


def game_over_text():
    over_text = over_font.render("You failed the mission!", True, (255, 255, 255))
    screen.blit(over_text, (200, 250))


# Keeps the window running until clicked closed
running = True
while running:
    # RGB value
    screen.fill((0, 0, 0))
    # Including background
    screen.blit(background, (0, 0))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        # Checking keystrokes pressed or not
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                playerX_change = -1
            if event.key == pygame.K_RIGHT:
                playerX_change = 1
            if bullet_state == 'ready':
                if event.key == pygame.K_SPACE:
                    # Shows the tip of the bullet
                    # Getting the x coordinate of the spaceship
                    bulletX = playerX
                    fire_bullet(bulletX, bulletY)

        # Checking release of keystrokes
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                playerX_change = 0

    # Show the Bullet movement
    if bulletY <= 0:
        bulletY = 480
        bullet_state = "ready"
    # Bullet is in the screen
    if bullet_state == "fire":
        fire_bullet(bulletX, bulletY)
        bulletY -= bulletY_change

    playerX += playerX_change
    # Condition to restrict the spaceship in the boundary
    if playerX < 0:
        playerX = 0
    elif playerX >= 736:  # 64 pixel size so 800-64
        playerX = 736

    # Condition to restrict the enemy in the boundary
    # A for loop for multiple enemies
    for i in range(num_of_enemies):
        enemyX[i] += enemyX_change[i]

           # Game Over
        if enemyY[i] > 440:
            for j in range(num_of_enemies):
                enemyY[j] = 2000
            game_over_text()
            break

        if enemyX[i] <= 0:
            # Hitting the boundary
            enemyX_change[i] = 0.3
            # Enemy comes down
            enemyY[i] += enemyY_change[i]
        elif enemyX[i] >= 736:  # 64 pixel size so 800-64
            enemyX_change[i] = -0.3
            enemyY[i] += enemyY_change[i]
        # Checking the collision of bullet and enemy
        collision = isCollision(enemyX[i], enemyY[i], bulletX, bulletY)
        if collision:
            bulletY = 480
            bullet_state = "ready"
            score_val += 1
            # Respawn in new location
            enemyX[i] = random.randint(0, 736)
            enemyY[i] = random.randint(50, 150)

        enemy(enemyX[i], enemyY[i], i)
    # Constantly show the player photo
    player(playerX, playerY)
    show_score(textX, textY)

    # Update constantly
    pygame.display.update()
