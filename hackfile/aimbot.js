editAimToBe=equal(nearestActivate, ActivateFire), activateCode
setObject{ifHang=2, setMouseAim=PlayerInertia
	  floatValue=PlayerX - PlayerY ***

if (activateSeePlayer),mouseClicked, adjustAimTo [PlayerInertia, PlayerX, PlayerY]

recogFile1=overrideWebpackMap
AimAlwaysAccurMode=true.html activated
AimAlwaysAccurMode=(aimOverride=nearestActivate)
triggerValue=x,y
PlayerValueX=aimFireAt
PlayerValueY=AimFireAt

Complete-> ClosePackage.html, resolveTrigger(ShutdownTime=0)
          
int lowDistMax = 75;
          
          double lowDist = lowDistMax;
float aimPosX = this.Width/2, aimPosY = this.Height/2;
          void AimAtPos(float x, float y)
        {
            //By fredaikis
            float ScreenCenterX = (this.Width / 2);
            float ScreenCenterY = (this.Height / 2);
            float TargetX = 0;
            float TargetY = 0;
            if (x != 0)
            {
                if (x > ScreenCenterX)
                {
                    TargetX = -(ScreenCenterX - x);
                    TargetX /= AimSpeed;
                    if (TargetX + ScreenCenterX > ScreenCenterX * 2) TargetX = 0;
                }
 
                if (x < ScreenCenterX)
                {
                    TargetX = x - ScreenCenterX;
                    TargetX /= AimSpeed;
                    if (TargetX + ScreenCenterX < 0) TargetX = 0;
                }
            }
            if (y != 0)
            {
                if (y > ScreenCenterY)
                {
                    TargetY = -(ScreenCenterY - y);
                    TargetY /= AimSpeed;
                    if (TargetY + ScreenCenterY > ScreenCenterY * 2) TargetY = 0;
                }
 
                if (y < ScreenCenterY)
                {
                    TargetY = y - ScreenCenterY;
                    TargetY /= AimSpeed;
                    if (TargetY + ScreenCenterY < 0) TargetY = 0;
                }
            }
            if (!smooth)
            {
                mouse_event(0x0001, (uint)(TargetX), (uint)(TargetY), NULL, NULLPTR);
                return;
            }
            TargetX /= 10;
            TargetY /= 10;
            if (Math.Abs(TargetX) < 1)
            {
                if (TargetX > 0)
                {
                    TargetX = 1;
                }
                if (TargetX < 0)
                {
                    TargetX = -1;
                }
            }
            if (Math.Abs(TargetY) < 1)
            {
                if (TargetY > 0)
                {
                    TargetY = 1;
                }
                if (TargetY < 0)
                {
                    TargetY = -1;
                }
            }
            mouse_event(0x0001, (uint)TargetX, (uint)TargetY, NULL, NULLPTR);
        }
          
          Vector3 head = GetBonePos(ent, 51);
if (w2scn(head, w2sHead))
{
    //whatever you want
    if (aimbot && entityTeam != PlayerTeam)
    {
        double distance = Dist2D((this.Width / 2), (this.Height / 2), w2sHead.x, w2sHead.y);
        if (distance < lowDist)
        {
            lowDist = distance;
            aimPosX = W2SNPos.x;
            aimPosY = W2SNPos.y;
        }
    }
    //whatever you want
}
          if (aimbot)
                {
                    if(GetAsyncKeyState(/*whatever key you want, 0x10 is shift and 0x12 is alt*/)!=0)
                        AimAtPos(aimPosX, aimPosY);
                    Circle((int)(this.Width / 2), (int)(this.Height / 2), lowDistAmt, 30, Color.Orange);//This is just a visual representation of the area the players that can be aimbotted
                }
          void Circle(int X, int Y, int radius, int numSides, Color Color)
        {
	        float Step = (float)(Math.PI * 2.0 / numSides);
	        int Count = 0;
	        for (float a=0; a < Math.PI*2.0; a += Step)
	        {
		        float X1 = (float)(radius * Math.Cos(a) + X);
		        float Y1 = (float)(radius * Math.Sin(a) + Y);
                float X2 = (float)(radius * Math.Cos(a + Step) + X);
                float Y2 = (float)(radius * Math.Sin(a + Step) + Y);
                if (Count!=0)
                {
                    DrawLine(X1, Y1, X2, Y2, 1, Color);
                }
		        Count += 2;
	        }
        }
          
          //Written for those using duppy's memory file
        Vector3 GetBonePos(int target, int bone)
        {
            int bMatrix = Mem.ReadInt(target + boneMatrix);
            Vector3 vec = new Vector3();
            vec.x = _m.rdFloat(bMatrix + (0x30 * bone) + 0xC);
            vec.y = _m.rdFloat(bMatrix + (0x30 * bone) + 0x1C);
            vec.z = _m.rdFloat(bMatrix + (0x30 * bone) + 0x2C);
            return vec;
        }
