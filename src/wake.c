#include <stdio.h>
#include <tchar.h>
#include <windows.h>

DWORD WINAPI WaitThread(LPVOID *pParam)
{
	getchar();

	return 0;
}

int main(int argc, char *argv[])
{
	SetThreadExecutionState(ES_SYSTEM_REQUIRED | ES_CONTINUOUS);

	HANDLE hWaitThread = CreateThread(NULL, 0, (LPTHREAD_START_ROUTINE)WaitThread, NULL, 0, NULL);

	while (WaitForSingleObject(hWaitThread, 10UL) != WAIT_OBJECT_0);

	if (hWaitThread) {
		TerminateThread(hWaitThread, -1);
		CloseHandle(hWaitThread);
		hWaitThread = NULL;
	}
}
