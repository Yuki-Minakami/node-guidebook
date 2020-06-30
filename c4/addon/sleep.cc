#include <iostream>
using namespace std;          
#include <unistd.h>
int main(){
  while(1) {
    cout << "hello" << endl;
    sleep(1);
    //usleep(100000);
  }
}
